import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Works = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = showAll
          ? 'http://localhost:4000/works'
          : 'http://localhost:4000/works?page=1&limit=5';

        const response = await fetch(endpoint);
        const result = await response.json();
        setCategories(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className='boxx'>
        {categories.map((c) => (
            <div className="AuthMainWork">
            <div className="AuthMainWorkBox">
            <div className="AuthMainWorkTop">
                <img className='AuthMainWorkTopImg' src={'http://localhost:4000/'+ c.image} alt="" />
                <h1 className='AuthMainWorkTopH1'>{c.title}</h1>     
            </div>
                <p className='AuthMainWorkTopP'>{c.description}</p>
                <Link to={'/register'}>
                <button className='AuthMainWorkBoxBtn'>Посмотреть</button>
                </Link>
            </div>
          </div>
        ))}

        <button className="AuhtHeaderLeftCategoryBoxleftbtn1" onClick={showAll ? handleShowLess : handleShowMore}>
          {showAll ? 'закрывать' : 'Смотреть все ворки'}
        </button>
      </div>
    </div>
  );
};

export default Works;
