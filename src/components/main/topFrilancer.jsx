import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import user from '../../images/user.png'


const Users = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = showAll
          ? 'http://localhost:4000/users'
          : 'http://localhost:4000/users?page=1&limit=5';

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
      <div className='TopFrilanserBox'>
        {categories.map((c) => (
            <div className="AuthMainTopFrilanser">
            <div className="AuthMainTopFrilanserBox">
            <div className="AuthMainTopFrilanserBoxImg">
                <img className='AuthMainTopFrilanserBoxImgImg' src={'http://localhost:4000/'+ c.image ?? user} alt="" />
                <div className="AuthMainTopFrilanserBoxImgName">
                    <h1 className='AuthMainTopFrilanserBoxImgNameH1'>{c.name}</h1>
                    <h1 className='AuthMainTopFrilanserBoxImgNameH2'>{c.who}</h1>
                    <h1 className='AuthMainTopFrilanserBoxImgNameH3'>{<ReactStars value={c.reyting} size={35}color2={'#FBA457'} edit={false}/>}</h1>
                </div>
            </div>
            <Link to={'/register'}>
            <button className='AuthMainTopFrilanserBoxBtn'>Написать</button>
            </Link>
            </div>
            </div>
        ))}

        <button className="AuhtHeaderLeftCategoryBoxleftbtn1" onClick={showAll ? handleShowLess : handleShowMore}>
          {showAll ? 'закрывать' : 'Посмотреть всех ТОП фрилансеров'}
        </button>
      </div>
    </div>
  );
};

export default Users;
