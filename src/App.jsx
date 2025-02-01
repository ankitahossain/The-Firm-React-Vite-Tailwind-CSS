import React from 'react'

import Header from './component/Header'
import Banner from './component/Banner'
import Blog from './component/Blog'


const App = () => {
  return (

    <div>
      <div className='container'>
        <Header />
      </div>
      <Banner />
      <div className='container'>
       <Blog />
      </div>
    </div>
  )
}

export default App
