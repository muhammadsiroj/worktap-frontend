import { Link, useParams } from "react-router-dom";
import x from "../../images/x.svg";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";

const Fast = () => {
  const { id } = useParams();
  const [cateName, setCateName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [malumot, setMalumot] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const fetchMalumotlar = async () => {
    let endpoint;

    if (cateName == null) {
        endpoint = `http://localhost:4000/orders/${id}`;
        console.log(endpoint);
    } else {
        endpoint = `http://localhost:4000/orders/${id}?title=${cateName}`;
        console.log(endpoint);
    }

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Serverdan ma\'lumotlarni olishda xatolik yuzaga keldi');
      }

      const data = await response.json();
      setMalumot(data.data);
    } catch (error) {
      console.error('Xatolik:', error.message);
    }
  };

  useEffect(() => {
    fetchMalumotlar();
  }, [id, cateName]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = showAll
          ? 'http://localhost:4000/categories'
          : 'http://localhost:4000/categories?page=1&limit=7';
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleSearch = () => {
    // Customize the fetch request or handle the search logic based on searchInput
    console.log(`Performing search with input: ${searchInput}`);
  };

  return (
    <>
      <div className="Fast">
        <div className="container">
          <div className="FastBox">
            <div className="FastBoxOne">
              <Link to={`/profil/${id}`}>
                <button className="FastBoxOneBtn">
                  <img src={x} alt="" />
                  Закрыть быстрый поиск
                </button>
              </Link>
            </div>
            <div className="FastBoxOTwo">
              <h1 className="FastBoxTwoH1">
                Ищите и находите подходящую работу среди{' '}
                <span className="FastBoxTwoH1Span">10,000+</span> проектов и
                покажите на что Вы способны!
              </h1>
            </div>
            <div className="FastBoxThree">
              <div className="FastBoxThreeBox">
                <input
                  className="AuthHeaderBoxLeftInp"
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Что нужно сделать?"
                />
                <button
                  className="AuthHeaderBoxLeftBtn"
                  onClick={handleSearch}
                >
                  Найти
                </button>
              </div>
            </div>
            <div className="FastBoxFour">
              {categories.map((c) => (
                <button
                  key={c.title}
                  onClick={() => setCateName(c.title)}
                  className="FastCategoryBtn"
                >
                  {c.title}
                </button>
              ))}
              <button
                className="AuhtHeaderLeftCategoryBoxleftbtn"
                onClick={showAll ? handleShowLess : handleShowMore}
              >
                {showAll ? 'закрывать' : 'Все категории'}
              </button>
            </div>
            <div className="FastBoxFive">
        <div className="stock">

                {malumot.map((m)=>(
                    <>
            <div className="stockCard">
            <div className="stockCardLeft">
                <h1 className='stockCardLeftH1'>{m.title}</h1>
                <div className="stockCardLeftBox">
                    <img className='stockCardLeftBoxImg' src={'http://localhost:4000/'+m.user_image} alt="aaaa" />
                    <div className="stockCardLeftBoxIn">
                        <h1 className='stockCardLeftBoxInH1'>{m.username}</h1>
                        <ReactStars  value={m.user_reyting} size={35} color={'#FBA457'} edit={false}/>
                    </div>
                </div>
            </div>
            <div className="stockCardRight">
                <h1 className='stockCardRightH1'>Бюджет: {m.price} $</h1>
            </div>
            </div>
            </>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fast;
