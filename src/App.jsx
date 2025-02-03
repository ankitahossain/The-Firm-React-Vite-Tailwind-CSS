import React from 'react'

import Header from './component/Header'
import Banner from './component/Banner'
import Blog from './component/Blog'
import Partner from './component/Partner'
import Heading from './component/Heading'


const App = () => {
  return (

    <div>
      <Heading/>
        <Header />
      
      <Banner />
  
       <Blog />
      <Partner />
    </div>
  )
}

export default App
