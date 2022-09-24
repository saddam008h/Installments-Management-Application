import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp'
import Header from './Header'
import Card from './Card';

export default function App() {
  return (
    <Router>
      
      <div>
          <Header />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/user/:id' element = {<Card/>}/>
          </Routes>
        </div>
     

      </Router>
  )
}

