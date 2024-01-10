import { Link } from "react-router-dom";
import bro from '../../images/bro.png'
import Category from "./category";

const AuthHeader = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="AuthHeaderBox">
                    <div className="AuthHeaderBoxLeft">
                        <h1 className="AuthHeaderBoxLeftH1">Покупайте фриланс-услуги в 
                            <span className="AuthHeaderBoxLeftSpan"> два клика</span>
                        </h1>
                        <p className="AuthHeaderBoxLeftP">Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                        <div className="AuthHeaderBoxLeftSearchBox">
                            <input className="AuthHeaderBoxLeftInp" type="text" placeholder="Что нужно сделать?" />
                            <Link to={'/register'}>
                            <button className="AuthHeaderBoxLeftBtn">Найти</button>
                            </Link>
                        </div>
                        <div className="AuthHeaderBoxLeftCategory">
                            <h2 className="AuthHeaderBoxLeftH2">Выберите рубрику, чтобы начать</h2>
                        <Category/>
                        </div>
                    </div>  
                    <div className="AuthHeaderBoxRight">
                        <img src={bro} alt="" />
                    </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default AuthHeader;