import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import six from '../../images/six.svg'

const CreateWorkSix = ({ setPage }) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate(`/profil/${id}`)
  }
  const handleSubmit2 = () => {
    setPage('CreateWorkFive');
  }

  return (
    <div className='container'>
      <div className="CreateWorkSix">
      <h1 className='CreateWorkSixH1'>Поздравляем!</h1>
      <p className='CreateWorkSixP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et volutpat sagittis, turpis sed cum massa.</p>
      <img className='CreateWorkSixImg' src={six} alt="" />
      </div>
      <div className="CreateWorkBtnBox">
      <button className='CreateWorkBtnBoxBtn' onClick={handleSubmit2}>Назад</button>
      <button className='CreateWorkBtnBoxBtn2' onClick={handleSubmit}>Опубликовать</button>
      </div>

    </div>
  );
}

export default CreateWorkSix;
