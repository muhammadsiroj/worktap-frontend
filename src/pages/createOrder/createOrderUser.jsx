import React, { useEffect, useState } from 'react';
import Profil from '../../components/navbar/profilNavbar';
import circle from '../../images/Circle.png';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CreateOrderUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('deadline', deadline);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('categoryId', category);

    try {
      if (image == undefined) {
        return toast.info(' Добавить фото')
        
      }
      const response = await fetch(`http://localhost:4000/order/${id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          navigate(`/profil/${id}`);
        }
      } else {
        console.error('HTTP error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const result = await fetch('http://localhost:4000/categories');
        const data = await result.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }



  return (
    <>
      <Profil />
      <div className="container">
        <h2>Опубликуйте ваш заказ</h2>
        <br />
        
        <form onSubmit={handleSubmit}>
          <div className="CreateWorkInp">
            <h2 className="CreateWorkInpH1">Название</h2>
            <input
              required
              className="CreateWorkInpInp"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Введите название"
            />
          </div>
          <br />
          <h2>Описание</h2>
          <br />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Кратко опишите свой ворк"
            cols="50"
            rows="8"
          ></textarea>
          <div className="CreateWorkSelect">
            <br />
            <h1 className="CreateWorkSelectH1">Категория</h1>
            <select
              className="CreateWorkSelectSelect"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
            <br />
          </div>
          <br />
          <div className="CreateWorkInp">
            <h1 className="CreateWorkInpH1">Срок выполнения работы в днях</h1>
            <input
              required
              className="CreateWorkInpInp"
              onChange={(e) => setDeadline(e.target.value)}
              type="number"
              placeholder="Введите срок выполнения"
            />
          </div>
          <br />
          <div className="CreateWorkInp">
            <h1 className="CreateWorkInpH1">Бюджет в тенге</h1>
            <input
              required
              className="CreateWorkInpInp"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Введите бюджет"
            />
          </div><br />
          <div id="form-file-upload">
            <input type="file" id="input-file-upload" onChange={handleImage} />
            <label id="label-file-upload" htmlFor="input-file-upload">
              <div className="CreateWorkImgBtn">
                <img className="CreateWorkImg" src={circle} alt="" />
                <button type="button" className="upload-button" onClick={handleSubmit}>
                </button>
                  <h1 className='btnH1'>Добавить фото</h1>
              </div>
            </label>
          </div>
          <div className="CreateWorkBtnBox">
            <button className="CreateWorkBtnBoxBtn" onClick={() => navigate(`/profil/${id}`)}>
              Назад
            </button>
            <button type="submit" className="CreateWorkBtnBoxBtn2">
              Дальше
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default CreateOrderUser;
