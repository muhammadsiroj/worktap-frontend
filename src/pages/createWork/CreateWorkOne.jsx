import React, { useEffect, useState } from 'react';

const CreateWorkOne = ({ setPage, setTitle, setCategory }) => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch('http://localhost:4000/categories');
      const data = await result.json();
      setCategories(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setCategory(categoryId);
  };

  const handleSubmit = () => {
    // Now you have the selected category id in the state (selectedCategoryId)
    setPage('CreateWorkTwo');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="container">
      <div className="CreateWorkBox">
      <div className="CreateWorkInp">
      <h1 className='CreateWorkInpH1'>Название</h1>
      <input req className='CreateWorkInpInp' onChange={handleTitle} type="text" placeholder="Placeholder" />
      </div>
      <div className="CreateWorkSelect">
        <h1 className='CreateWorkSelectH1'>Категория</h1>
      <select placeholder="Категория" className='CreateWorkSelectSelect' onChange={handleCategoryChange}>
        <option value=''>Категория</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>
        </div>
      </div>
      <div className="CreateWorkOneBtn">
      <button className='CreateWorkOneBtnBtn' onClick={handleSubmit}>Дальше</button>
      </div>
        </div>
    </>
  );
};

export default CreateWorkOne;
