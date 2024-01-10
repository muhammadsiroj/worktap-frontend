import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cir from "../../images/Cir.png"
import ProfilMainReview from "./review";

const ProfilMain = () => {
  const id = useParams().id
  const [data,setData] = useState([])
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      let endpoint = showAll
      ? `http://localhost:4000/jobs/${id}`
      : `http://localhost:4000/jobs/${id}?page=1&limit=11`;
      const response = await fetch(endpoint);
      const result = await response.json();
      setData(result.data);
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
}

  return (
    <main>
      <div className="ProfilMain">
    <div className="container">
      <div className="ProfilMainTop">
      <h1>Мой ворки</h1>
      <div className="ProfilMainBox">
      <div className="ProfilMainBoxJob">
      <Link to={`/creatework/${id}`}>
        <div className="ProfilMainBoxCreate">
        <img className="ProfilMainBoxCreateImg" src={cir} alt=""/>
        <h1 className="ProfilMainBoxCreateH1">Создать ворк</h1>
        </div>
      </Link>
    {data.map((e)=>(
      <div className="ProfilMainBoxJobData">
        <img className="ProfilMainBoxJobDataImg" src={'http://localhost:4000/'+e.image} alt="" />
        <h1 className="ProfilMainBoxJobDataH1">{e.title}</h1>
        <h2 className="ProfilMainBoxJobDataH2">{e.price}$</h2>
      </div>
    ))}

      </div>
      </div>
      <div className="ProfilMainBoxBtn">
          <button className="ProfilMainBtn"  onClick={showAll ? handleShowLess : handleShowMore}>
          {showAll ? 'закрывать' : 'Загрузить еще'}
        </button>
      </div>
    </div>
    <div className="ProfilMainBottom">
      <ProfilMainReview/>
    </div>
      </div>
    </div>
    </main>
  );
}
 
export default ProfilMain;