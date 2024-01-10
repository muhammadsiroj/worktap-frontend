import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";

const ProfilMainReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [positiveReviewCount, setPositiveReviewCount] = useState(0);
  const [negativeReviewCount, setNegativeReviewCount] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const numParam = showAllReviews ? "3" : "3.1";
        const endpoint = showMore
          ? `http://localhost:4000/review/${id}?num=${numParam}&page=1&limit=6`
          : `http://localhost:4000/review/${id}?num=${numParam}`;

        const response = await fetch(endpoint);
        const result = await response.json();

        if (numParam === "3") {
          setPositiveReviewCount(result.data.count);
        } else if (numParam === "3.1") {
          setNegativeReviewCount(result.data.count);
        }

        setReviews(result.data.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors appropriately
      }
    };

    fetchData();
  }, [showAllReviews, showMore, id]);

  const handleToggleReviews = () => {
    setShowAllReviews(false);
  };

  const handleTogglePositiveReviews = () => {
    setShowAllReviews(true);
  };

  const handleToggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <main>
      <h1 className="ProfilMainTopBtnH1">Отзывы</h1>
      <div className="ProfilMainTopBtn">
        <button className={showAllReviews ? "PositiveBtn" : "NegativeBtn"} onClick={handleToggleReviews}>
          Положительные ({negativeReviewCount})
        </button>
        <button className={showAllReviews ? "NegativeBtn" : "PositiveBtn"} onClick={handleTogglePositiveReviews}>
          Отрицательные ({positiveReviewCount})
        </button>
      </div>
      <div className="Review">
      {reviews.map((e) => (
        <div key={e.id} className="ReviewBox">
          <div className="ReviewBoxTop">
            <img className="ReviewBoxTopBoxImg" src={'http://localhost:4000/'+e.image} alt="" />
            <div className="ReviewBoxTopBox">
              <h1 className="ReviewBoxTopH1">{e.name}</h1>
              <ReactStars value={e.reyting} size={35}color2={'#FBA457'} edit={false}/>
            </div>
          </div>
          <div className="ReviewBoxBottom">
            <p className="ReviewBoxBottomP">{e.description}</p>
          </div>
        </div>  
        ))}
      </div>
      <div className="ProfilReviewBtn">
      <button className="ProfilMainBtn" onClick={handleToggleShowMore}>
        {showMore ? 'Загрузить еще' : 'Закрыть'}
      </button>
      </div>
    </main>
  );
};

export default ProfilMainReview;
