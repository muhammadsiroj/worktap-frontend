import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import linked from "../../images/linked.png"
import twitter from "../../images/twitter.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="FooterBox">
                <div className="FooterBoxTop">
                <div className="FooterBoxTopFirst">
                    <h1 className="FooterBoxTopFirstH1">Топ категории</h1>
                    <li className="FooterBoxTopFirstLi">Тексты и переводы</li>
                    <li className="FooterBoxTopFirstLi">Разработка</li>
                    <li className="FooterBoxTopFirstLi">Дизайн</li>
                    <li className="FooterBoxTopFirstLi">Аудио, видео монтаж</li>
                    <li className="FooterBoxTopFirstLi">Соцсети и реклама</li>
                    <li className="FooterBoxTopFirstLi">Бизнес и жизнь</li>
                    <li className="FooterBoxTopFirstLi">SEO и оптимизация</li>
                </div>
                <div className="FooterBoxTopSecond">
                <h1 className="FooterBoxTopSecondH1">О Проекте</h1>
                    <li className="FooterBoxTopSecondLi">О Нас</li>
                    <li className="FooterBoxTopSecondLi">Как Это Работает</li>
                    <li className="FooterBoxTopSecondLi">Политика Приватности</li>
                    <li className="FooterBoxTopSecondLi">Правила Пользования </li>
                    <li className="FooterBoxTopSecondLi">Пресса о нас</li>
                </div>
                <div className="FooterBoxTopThird">
                <h1 className="FooterBoxTopThirdH1">Поддержка</h1>
                    <li className="FooterBoxTopThirdLi">Контакты</li>
                    <li className="FooterBoxTopThirdLi">Политика Безопасности</li>
                    <li className="FooterBoxTopThirdLi">FAQ</li>
                </div>
                <div className="FooterBoxTopFouth">
                    <h1 className="FooterBoxTopFouthH1">Follow</h1>
                    <div className="FooterBoxTopFouthImages">
                        <img className="FooterBoxTopFouthImagesImg" src={facebook} alt="" />
                        <img className="FooterBoxTopFouthImagesImg" src={twitter} alt="" /> 
                        <img className="FooterBoxTopFouthImagesImg" src={instagram} alt="" />
                       <img className="FooterBoxTopFouthImagesImg" src={linked} alt="" />
                    </div>
                </div>
                </div>
                <div className="FooterBoxBottom">
                    <h1 className="FooterBoxBottomH1">Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</h1>
                </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;