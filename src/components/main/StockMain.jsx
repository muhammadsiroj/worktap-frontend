import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const StockMain = ({categoryName,categoryId}) => {
    const {id} = useParams()
    const [max,setMax] = useState(null)
    const [min,setMin] = useState(null)
    const [count,setCount] = useState(null)
    const [malumot ,setMalumot] = useState([])


    const fetchMalumotlar = async () => {
        let endpoint;
        
        if (min === null || max === null) {
            endpoint = `http://localhost:4000/order/${id}`
        }  
        else{
            endpoint = `http://localhost:4000/order/${id}?max=${max}&min=${min}`
        }
        try {
          const response = await fetch(endpoint);
      
          if (!response.ok) {
            throw new Error('Serverdan ma\'lumotlarni olishda xatolik yuzaga keldi');
          }
      
          const data = await response.json();
          setCount(data.data.count);
          setMalumot(data.data.rows);
        } catch (error) {
          console.error('Xatolik:', error.message);
        }
      };
      useEffect(() => {
        fetchMalumotlar();
      }, [id, max, min]);
  return (
    <main>

    <div className="StockMainBox">
        <div className="container">

        <div className="StockMainBoxNav">
        <div className="StockMainBoxNav1">
            <h2>{count} проектов по {categoryName}</h2>
        </div>
        <div className="StockMainBoxNav2">
            <input onChange={(e)=>setMin(e.target.value)} className='StockMainBoxNav2Inp' type="number" placeholder='Минимальная цена'/>
            <h1 className='StockMainBoxNav2H1'>_</h1>
            <input onChange={(e)=>setMax(e.target.value)} className='StockMainBoxNav2Inp' type="number" placeholder='Максимальная цена'/>
        </div>
        
        </div>
        <div className="stock">

        {malumot.length == 0 ? 
        <>
            <h1 className='StockNotFound'>Биржа не найдена</h1>
        </> :
        malumot.map((e)=>(
            <>
            <div className="stockCard">
            <div className="stockCardLeft">
                <h1 className='stockCardLeftH1'>{e.title}</h1>
                <div className="stockCardLeftBox">
                    <img className='stockCardLeftBoxImg' src={'http://localhost:4000/'+ e.user_image} alt="aaaa" />
                    <div className="stockCardLeftBoxIn">
                        <h1 className='stockCardLeftBoxInH1'>{e.username}</h1>
                        <ReactStars  value={e.user_reyting} size={35} color={'#FBA457'} edit={false}/>
                    </div>
                </div>
            </div>
            <div className="stockCardRight">
                <h1 className='stockCardRightH1'>Бюджет: {e.price} $</h1>
            </div>
            </div>
            </>
        ))}
        </div>
        </div>
    </div>
</main>
  )
}

export default StockMain