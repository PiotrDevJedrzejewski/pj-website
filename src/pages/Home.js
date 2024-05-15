import React from 'react'
import Header from '../components/Header'
import CardsContainer from '../components/CardsContainer'
import Info from '../components/Info'
import SliderContainer from '../components/SliderContainer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <SliderContainer />
      <Info />
      <CardsContainer />
      <Footer />
    </div>
  )
}

export default Home
