import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../images/logo.png"

const Register = () => {
  const home = useNavigate()
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [role, setRole] = useState('');
  const [who, setWho] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleWhoChange = (e) => {
    setWho(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password == password2){
      fetch('http://localhost:4000/register', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
        role,  
        who,
        description

        
      }),
    })
      .then(response => response.json())
      .then(data => {
        if(!data.token){
        toast.error("ERROR")
        }
        if (data.token) {
          localStorage.setItem("token",data.token)
          home(`/setting/${data.id}`)
        }
      })
      .catch(error => {
        toast.error("a")
        console.error('Login error:', error);
      });
    }else{
      toast.error("password incorrect")
    }
    
  }
  return (
    <>
    <div className="Register">
    <div className="RegisterLeft">
      <div className="RegisterLeftBox">

      <img className='RegisterLeftImg' src={logo} alt="logo" />
      <p>Давайте создадим Вам аккаунт</p>
      <h1>Заполните все поля</h1>
      <form className='RegisterLeftForm' onSubmit={handleSubmit}>
        <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>Ваше имя</h1>
          <input required placeholder='Ваше имя' type="name" value={name} onChange={handleNameChange} />
        </div> 
        <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>ваша фамилия</h1>
          <input required placeholder='ваша фамилия' type="name" value={surname} onChange={handleSurnameChange} />
        </div>
          <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>E-mail</h1>
          <input required placeholder='E-mail' type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>Пароль</h1> 
          <input required placeholder='Пароль' type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>Повтарите пароль</h1>
          <input required placeholder='Пароль' type="password" value={password2} onChange={handlePassword2Change} />
          </div>
          <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>Ваш работа</h1>
          <input required placeholder='Ваш работа' type="who" value={who} onChange={handleWhoChange} />
          </div>
          <div className="RegisterLeftFormDiv">
          <h1 className='inputH1'>описание</h1>
          <input required placeholder='ваш описание' type="text" value={description} onChange={handleDescriptionChange} />
          </div>
         
      <div className='Role'>
        <div className="RoleBox">
        <input required className='RoleBoxInp' type="radio" name='role' value={"user"} onChange={handleRoleChange} />
          <h1 className='RoleBoxH1'>Я исполнитель</h1>
        </div>
        <div className="RoleBox">
        <input required className='RoleBoxInp' type="radio" name='role' value={"work"} onChange={handleRoleChange} />
          <h1 className='RoleBoxH1'>Я заказчик</h1>
        </div>
      </div>

      <button className='RegisterBtn' type="submit">Зарегестрироваться</button>
      <Link className='RegisterLink' to={"/login"}>У Вас есть аккаунт?<span className='RegisterLinkSpan'>Войдите</span> </Link>

    </form>
      </div>
    </div>
    <div className="RegisterRight">
      <div className="RegisterRightBox">
        <p>Worktap — это маркетплейс фриланс услуг, где можно купить услугу как товар в магазине или создать индивидуальный заказ на бирже. </p>
      </div>
    </div>
    </div>
<ToastContainer/>
    
    </>
  );
};

export default Register;
