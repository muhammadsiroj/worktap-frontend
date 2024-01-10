import React from 'react';

const CreateWorkFour = ({ setPage,setSubDescription }) => {
  const handleSubmit = () => {
    setPage('CreateWorkFive');
  }
  const handleSubmit2 = () => {
    setPage('CreateWorkThree');
  }
  const handlesetSubDescription = (e)=>{
    const subdesc = e.target.value;
    setSubDescription(subdesc)
  }

  return (
    <div className='container'>
      <div className="CreateWorkFourBox">
      <h1 className='CreateWorkFourH1'>Расскажите покупателю, что вам нужно для начала работы над заказом.</h1>
      <br />
      <h1 className='CreateWorkFourH12'>Структурируйте свои инструкции для покупателя в виде произвольного текста.</h1>
      <br />
      <textarea onChange={handlesetSubDescription} placeholder='Кратко опишите требования' cols="70" rows="10"></textarea>
      </div>
      <div className="CreateWorkBtnBox">
      <button className='CreateWorkBtnBoxBtn' onClick={handleSubmit2}>Назад</button>
      <button className='CreateWorkBtnBoxBtn2' onClick={handleSubmit}>Дальше</button>
      </div>

    </div>
  );
}

export default CreateWorkFour;
