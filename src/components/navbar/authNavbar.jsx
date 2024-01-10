import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const AuthNavbar = () => {
    return (
        <>
        <nav>

        <div className="container">
            <div className="AuthNavbarBox">
                <div className="AuthNavbarBoxLeft">
                    <img src={logo} alt="" />
                    <Link to={'/register'}><li className='AuthNavbarBoxLeftLi'>Биржа</li></Link>
                    <Link to={'/register'}><li className='AuthNavbarBoxLeftLi'>Ворки</li></Link>
                    <Link to={'/register'}><li className='AuthNavbarBoxLeftLi'>Конкурсы</li></Link>
                    <Link to={'/register'}><li className='AuthNavbarBoxLeftLi'>Создать ворк</li></Link>
                    <Link to={'/register'}><li className='AuthNavbarBoxLeftLi'>Создать заказ</li></Link>
                </div>
                <div className="AuthNavbarBoxRight">
                    <Link to={'register'}>
                        <button className='AuthNavbarBoxLeftBtn'>Регистрация</button>
                    </Link>
                    <Link to={'login'}>
                        <button className='AuthNavbarBoxLeftBtn'>Войти</button>
                    </Link>
                </div>
            </div>
        </div>
        </nav>
        </>
    );
}
 
export default AuthNavbar;