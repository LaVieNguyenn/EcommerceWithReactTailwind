import React from 'react'
import Narbar from './components/Navbar/Narbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, []);

  return (
    <div>
      <Narbar/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default App