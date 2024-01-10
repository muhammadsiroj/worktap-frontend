import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import globe from "../../images/Globe.png"
import watch from "../../images/watch.png"
import edu from "../../images/edu.png"
import lang from "../../images/lang.png"
import certi from "../../images/certi.png"
import str from "../../images/str.svg"
import dumaloq from "../../images/dumaloq.svg"
import dumaloq2 from "../../images/dumaloq2.svg"
import nuqta from "../../images/nuqta.svg"
import czq from "../../images/czq.svg"
import s from "../../images/s.png"
import set from "../../images/Settings.png"
import ReactStars from 'react-stars';

const ProfilHeader = () => {
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
        {data.map((e) => (
            <header key={e.id}>
                <div className="container">
                    <div className="HeaderBox">
                    <div className="HeaderLeft">
                        <h1 className='whoH1'>{e.who}</h1>
                        <h1><span className='surnameSpan'>{e.name}</span> {e.lastname}  </h1>
                        <h1 className='HeaderLeftDes'>{e.description}</h1>
                        <div className="accordion-section">
                            <div className="accordion-title" onClick={toggleAccordion}>
                                {isOpen ? 'Скрыть подробную информацию' : 'Показать подробную информацию'}
                                <img className={`accordion-icon ${isOpen ? 'rotate-animation' : 'rotate'}`} src={str} alt="" />
                                </div>
                                {isOpen && 
                                <div className="accordion-content">
                                    <div className="strana">
                                        <div className="stranaImg">
                                            <img className='stranaImgImg' src={globe} alt="" />
                                            <h1 className='stranaImgH1'>Страна: </h1>
                                        </div>    
                                        <h1 className='stranaH1'>{e.address}</h1>
                                    </div>     
                                    <div className="strana">
                                        <div className="stranaImg">
                                            <img className='stranaImgImg' src={watch} alt="" />
                                            <h1 className='stranaImgH1'>На сайте: </h1>
                                        </div>    
                                        <h1 className='stranaH1'>{e.time} года</h1>
                                    </div> 
                                    <div className="strana">
                                        <div className="stranaImg">
                                            <img className='stranaImgImg' src={edu} alt="" />
                                            <h1 className='stranaImgH1'>Образование:</h1>
                                        </div>    
                                        <h1 className='stranaH1'>{e.education}</h1>
                                    </div>
                                    <div className="strana">
                                        <div className="stranaImg">
                                            <img className='stranaImgImg' src={lang} alt="" />
                                            <h1 className='stranaImgH1'>Знание языков:</h1>
                                        </div>    
                                        <h1 className='stranaH1'>{e.language }</h1>
                                    </div>
                                    <div className="strana">
                                        <div className="stranaImg">
                                            <img className='stranaImgImg' src={certi} alt="" />
                                            <h1 className='stranaImgH1'>Сертификаты:</h1>
                                        </div>    
                                        <h1 className='stranaH1'>{e.certificate}</h1>
                                    </div>
                                </div>}
                            </div>
                    </div>
                    <div className="HeaderRight">
                        <img className='HeaderRightImg' src={'http://localhost:4000/'+e.image} alt="" />
                        <div className="HeaderRightStar">
                            <ReactStars value={e.reyting} size={35} color={'#FBA457'} edit={false}/>
                        </div>
                        <img className='HeaderRightImgDumaloq' src={dumaloq} alt="" />
                        <img className='HeaderRightImgDumaloq2' src={dumaloq2} alt="" />
                        <img className='HeaderRightImgnuqta' src={nuqta} alt="" />
                        <img className='HeaderRightImgczq' src={czq} alt="" />
                        <Link to={`/setting/${e.id}`}>
                        <button className='HeaderRightImgBtn'><img src={set} alt="" /></button>
                        </Link>
                    </div>
                    </div>
                </div>
                    <Link to={`/fast/${id}`}>
                        <button className='FastSearch'>
                             Быстрый 
                             поиск ворков
                        
                        <img src={s} alt="" />
                        </button>
                    </Link>
            </header>
        ))}
    </>
  );
};

export default ProfilHeader;