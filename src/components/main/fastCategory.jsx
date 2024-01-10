import React, { useState, useEffect } from 'react';

const FastCategory = ({setId,setCategoryName}) => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);


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
  return (
    <>
        {categories.map((c) => (
            <button onClick={()=>{setId(c.id),setCategoryName(c.title)}} className="FastCategoryBtn">{c.title}</button>
        ))}
        <button className="AuhtHeaderLeftCategoryBoxleftbtn" onClick={showAll ? handleShowLess : handleShowMore}>
          {showAll ? 'закрывать' : 'Все категории'}
        </button>
        
      </>
  );
};

export default FastCategory;
