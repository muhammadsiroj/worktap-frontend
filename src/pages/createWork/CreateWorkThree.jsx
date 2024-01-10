import React from 'react';

const CreateWorkThree = ({ setPage,setDescription }) => {
  const handleSubmit = () => {
    setPage('CreateWorkFour');
  }
  const handleSubmit2 = () => {
    setPage('CreateWorkTwo');
  }
  const handleDescription = (e) => {
    const desc = e.target.value
    setDescription(desc);
  }

  return (
    <div className='container'>
      <h1>Описание</h1>

    <textarea onChange={handleDescription} placeholder='Кратко опишите свой ворк'  cols="70" rows="10"></textarea>

      <div className="CreateWorkBtnBox">
      <button className='CreateWorkBtnBoxBtn' onClick={handleSubmit2}>Назад</button>
      <button className='CreateWorkBtnBoxBtn2' type='submit' onClick={handleSubmit}>Дальше</button>
      </div>

    </div>
  );
}

export default CreateWorkThree;
