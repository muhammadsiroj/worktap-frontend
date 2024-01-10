import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../images/logo.png';
import favorite from '../../images/Favorite.png';
import notification from '../../images/Notification.png';
import chat from '../../images/Chat.png';
import str from "../../images/str.svg"

const Profil = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/user/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        setData(userData.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="AuthNavbarBox">
            <div className="AuthNavbarBoxLeft">
              <img src={logo} alt="" />
              <Link to={`/stock/${id}`}>
                <li className="AuthNavbarBoxLeftLi">Биржа</li>
              </Link>
              <Link to={''}>
                <li className="AuthNavbarBoxLeftLi">Ворки</li>
              </Link>
              <Link to={''}>
                <li className="AuthNavbarBoxLeftLi">Конкурсы</li>
              </Link>
              <Link to={`/creatework/${id}`}>
                <li className="AuthNavbarBoxLeftLi">Создать ворк</li>
              </Link>
              <Link to={`/createorder/${id}`}>
                <li className="AuthNavbarBoxLeftLi">Создать заказ</li>
              </Link>
              <img className="ProfilhNavbarBoxRightImg" src={favorite} alt="" />
              <img className="ProfilhNavbarBoxRightImg" src={notification} alt="" />
              <img className="ProfilhNavbarBoxRightImg" src={chat} alt="" />
            </div>
            <div className="ProfilhNavbarBoxRight">

                          <div className={`${isOpen ? 'NavbarAccardion' : 'NavbarAccardions'}`}>
                            <div className='NavbarAccardionBox' onClick={toggleAccordion}>
                              <div className="ProfilName">
                                {data.map((item) => (
                                    <div key={item.id} className='Map'>
                                    <h1>{item.name}</h1>
                                    <img className='UserImage' src={'http://localhost:4000/'+item.image} alt="" />
                                    </div>
                                ))}
                              </div>
                                <img className={`accordion-icon ${isOpen ? 'rotate-animation' : 'rotate'}`} src={str} alt="" />
                                </div>
                                {isOpen && 
                                <div className="accordion-contenta">
                                   <Link className='AccordionContentLink' to={`/profil/${id}`}>Мой кабинет</Link>
                                   <Link className='AccordionContentLink' to={`/profil/${id}`}>Мои заказы</Link>
                                   <Link className='AccordionContentLink' to={`/profil/${id}`}>История</Link>
                                   <Link className='AccordionContentLink' to={`/setting/${id}`}>Мои настройки</Link>
                                   <Link className='accordion-contentLink5' to={'/'}>Выйти из аккаунта  </Link>
                                   
                                    
                                </div>}
                            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Profil;
