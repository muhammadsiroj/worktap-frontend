import creditcard from "../../images/creditcard.png"
import money1 from "../../images/money1.png"
import clock from "../../images/clock.png"
import { Link } from "react-router-dom"
export const Back = ()=>{
    return(
        <main>
            <div className="BackBox">
            <div className="container">
                <div className="BackBoxIn">
                    <h1 className="BackBoxInH1">Как WorkTap помогает бизнесу?</h1>
                    <div className="BackBoxInFirst">
                        <img className="BackBoxFirstImg" src={creditcard} alt="" />
                        <h1 className="BackBoxFirstH1">Оплачивайте с р/с или карты компании</h1>
                    </div>
                    <div className="BackBoxInSecond">
                        <img className="BackBoxFirstImg" src={money1} alt="" />
                        <h1 className="BackBoxFirstH1">Экономьте до 87% бюджета на фрилансе</h1>
                    </div>
                    <div className="BackBoxInThirt">
                        <img className="BackBoxFirstImg" src={clock} alt="" />
                        <h1 className="BackBoxFirstH1">Экономьте до 75% времени на решении фриланс задач</h1>
                    </div>
                    <h1 className="BackBoxInH1">WorkTap — быстро, просто и безопасно!</h1>
                    <Link to={"/register"}>
                    <button className="BackBoxInBtn">Начать!</button>
                    </Link>
                </div>
            </div>
            </div>
        </main>
    )
}