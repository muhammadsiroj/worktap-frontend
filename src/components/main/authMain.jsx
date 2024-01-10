import Users from "./topFrilancer";
import Works from "./works";
import qz from "../../images/qz.png"
import money from "../../images/money.png"
import result from "../../images/result.png"
import { Back } from "./back";
const AuthMain = () => {
    return (
        <>
        <main>
            <div className="container">
                <div className="AuthMainFirst">
                <div className="AuthMainFirstTop">
                    <h1 className="AuthMainFirstTopH1" >Актуальные ворки</h1>
                </div>
                <div className="AuthMainFirstBottom">
                    <Works/>
                </div>
                </div>
                <div className="AuthMainSecond">
                    <div className="AuthMainSecondTop">
                        <h1 className="AuthMainSecondTopH1">Топ фрилансеров</h1>
                    </div>
                    <div className="AuthMainSecondBottom">
                        <Users/>
                    </div>
                </div>
                <div className="AuthMainThird">
                    <h1 className="AuthMainThirdH1">Как решать задачи на WorkTap?</h1>
                    <p className="AuthMainThirdP">Идеально подходит для бизнеса и частных лиц</p>
                    <div className="AuthMainThirdBox">
                    <div className="AuthMainThirdBoxLeft">
                        <img className="AuthMainThirdBoxLeftImg" src={qz} alt="" />
                        <h1 className="AuthMainThirdBoxLeftH1">Выберите услугу</h1>
                        <p className="AuthMainThirdBoxLeftP">В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                    </div>
                    <div className="AuthMainThirdBoxCenter">
                        <img className="AuthMainThirdBoxCenterImg" src={money} alt="" />
                        <h1 className="AuthMainThirdBoxLeftH1">Оплатите</h1>
                        <p className="AuthMainThirdBoxCenterP">Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
                    </div>
                    <div className="AuthMainThirdBoxRight">
                        <img className="AuthMainThirdBoxRightImg" src={result} alt="" />
                        <h1 className="AuthMainThirdBoxLeftH1">Получите результат</h1>
                        <p className="AuthMainThirdBoxLeftP">Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                    </div>

                    </div>
                </div>
            </div>
                <div className="AuthMainFourth">
                    <Back/>
                </div>
        </main>
        </>
    );
}
 
export default AuthMain;