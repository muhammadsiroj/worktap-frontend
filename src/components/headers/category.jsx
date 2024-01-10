import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="AuhtHeaderLeftCategoryBoxRight">
        {categories.map((c) => (
          <Link to={`/work/${c.id}`} key={c.id}>
            <button className="AuhtHeaderLeftCategoryBoxRightbtn">{c.title}</button>
          </Link>
        ))}

        <button className="AuhtHeaderLeftCategoryBoxleftbtn" onClick={showAll ? handleShowLess : handleShowMore}>
          {showAll ? 'закрывать' : 'Все категории'}
        </button>
      </div>
    </div>
  );
};

export default Category;
