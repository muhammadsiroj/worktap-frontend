import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../images/logo.png"

const Login = () => {
  const home = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (!data.token) {
        toast.error("ERROR")
        }
        if (data.token) {
          localStorage.setItem("token",data.token)
          home(`/profil/${data.id}`)
        }
      })
      .catch(error => {
        toast.error("a")
        console.error('Login error:', error);
      });
  };

  return (
    <>
    <div className="Login">
    <div className="LoginLeft">
      <div className="LoginLeftBox">
      <div className="LoginLeftLogo">
        <img src={logo} alt="" />
      </div>
      <p>Добро пожаловать!</p>
      <h1>Войдите в свой аккаунт</h1>
      <form className='LoginLeftBoxForm' onSubmit={handleSubmit}>

        <div className="RegisterLeftFormDiv">
        <h1 className='inputH1'>E-mail</h1>
        <input required placeholder='E-mail' type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="RegisterLeftFormDiv">
        <h1 className='inputH1'>Пароль</h1>
        <input required placeholder='Пароль' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="loginInpRadio">
        <input className='RoleBoxInp' type="radio" name="" id="" />
        <h3>Запомнить меня</h3>
        </div>
      <button className='RegisterBtn' type="submit">Войти</button>
      <Link to={"/register"}>У Вас все еще нет аккауна?<span className='RegisterLinkSpan'> Зарегистрируйтесь бесплатно!</span></Link>
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

export default Login;
