import React from 'react'
import Hero from '../components/Hero/Hero'

const Home = ({setShowLogin}) => {
  return (
    <section>
        <Hero setShowLogin={setShowLogin}/>
    </section>
  )
}

export default Home