import React from 'react'

import Header from './component/Header'
import Banner from './component/Banner'
import Blog from './component/Blog'
import Partner from './component/Partner'
import Heading from './component/Heading'
import Frustration from './component/Frustration'
import Solution from './component/Solution'
import Chooseus from './component/Chooseus'
import Research from './component/Research'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'
import Touch from './component/Touch'




const App = () => {
  return (

    <div>
      <Heading/>
        <Header />
      
      <Banner />
  
       <Blog />
      <Partner />
      <Frustration />
      <Solution/>
      <Chooseus />
      <Research />
      <Testimonial />
      <Touch/>
      <Footer/>
      </div>
  )
}

export default App
