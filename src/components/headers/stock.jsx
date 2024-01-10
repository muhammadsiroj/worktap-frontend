import FastCategory from "../main/fastCategory"
import Profil from "../navbar/profilNavbar"

const StockHeader = ({setId,setCategoryName})=>{
    return (
    <>
        <div className="Fast">
        <div className="container">
                <div className="FastBoxTwo">
                    <h1 className="FastBoxTwoH1">Ищите и находите подходящую работу среди <span className="FastBoxTwoH1Span">10,000+</span> проектов и покажите на что Вы способны!</h1>
                </div>
                <div className="FastBoxThree">
                    <div className="FastBoxThreeBox">
                        <input className="AuthHeaderBoxLeftInp" type="text"  placeholder="Что нужно сделать?"/>
                        <button className="AuthHeaderBoxLeftBtn">Найти</button>
                    </div>
                </div>
                <div className="StockBoxFour">
                    <FastCategory setCategoryName={setCategoryName} setId = {setId}/>
                </div>
            </div>
        </div>
    </>
    )
}

export default StockHeader