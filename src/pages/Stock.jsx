import React, { useState } from 'react'
import StockHeader from '../components/headers/stock'
import Profil from '../components/navbar/profilNavbar'
import StockMain from '../components/main/StockMain'
import Footer from '../components/footer/footer'

const StockPage = () => {
    const [id ,setId] = useState(null)
    const [categoryName ,setCategoryName] = useState('')


  return (
    <>
        <Profil/>
        <StockHeader setCategoryName={setCategoryName} setId={setId}/>
        <StockMain categoryId={id} categoryName={categoryName}/>
        <Footer/>
    </>
  )
}

export default StockPage