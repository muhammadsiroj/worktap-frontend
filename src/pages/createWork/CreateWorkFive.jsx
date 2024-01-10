import React, { useState } from 'react';
import circle from '../../images/Circle.png';
import { useParams } from 'react-router-dom';

const CreateWorkFive = ({ setPage, title, category, packages, pacDescription, deadline, price, description, subDescription }) => {
  const [image, setImage] = useState(null);
  const { id } = useParams();

  const handlePost = async () => {
    try {
      const form = new FormData();
      form.append('title', title);
      form.append('categoryId', category);
      form.append('packages', packages);
      form.append('pacDescription', pacDescription);
      form.append('deadline', deadline);
      form.append('price', price);
      form.append('description', description);
      form.append('subDescription', subDescription);
      form.append('image', image);

      const response = await fetch(`http://localhost:4000/jobs/${id}`, {
        method: 'POST',
        headers: {
          'token': `${localStorage.getItem('token')}`,
        },
        body: form,
      });

      if (response.ok) {
        const responseData = await response.json();
        setPage('CreateWorkSix');
      } else {
        console.error('Server error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async () => {
    await handlePost();
  };

  const handleSubmit2 = () => {
    setPage('CreateWorkFour');
  };

  const handleImage = (e) => {
    const files = e.target.files[0];
    setImage(files);
  };

  return (
    <div className='container'>
      <h1 className='CreateWorkFiveH1'>CreateWorkFiveСоздайте свою галерею</h1>
      <br />
      <p className='CreateWorkFiveP'>Добавьте запоминающийся контент в свою галерею, чтобы выделиться среди конкурентов.</p>
      <div className='CreateWorkFiveBox'>
        <h1 className='CreateWorkFiveBoxH1'>Фотографии ворка</h1>
        <br />
        <p className='CreateWorkFiveBoxP'>
          Загрузите фотографии, которые описывают или имеют отношение к вашему ворку. Только файлы с расширением png, jpg,
          jpeg.
        </p>
        <br />
        <form id='form-file-upload'>
          <input type='file' id='input-file-upload' onChange={handleImage} multiple />
          <label id='label-file-upload' htmlFor='input-file-upload'>
            <div className='CreateWorkImgBtn'>
              <img className='CreateWorkImg' src={circle} alt='' />
              <button type='button' className='upload-button' onClick={handleSubmit}>
                Добавить фото
              </button>
            </div>
          </label>
        </form>
      </div>
      <div className='CreateWorkBtnBox'>
        <button className='CreateWorkBtnBoxBtn' onClick={handleSubmit2}>
          Назад
        </button>
        <button className='CreateWorkBtnBoxBtn2' onClick={handleSubmit}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default CreateWorkFive;
