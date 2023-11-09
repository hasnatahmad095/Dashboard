import React, { Component } from 'react'
import './App.css'
import Main from './Components/Main'
import Main2 from './Components2/Main2'
import Main3 from './Components3/Main3'
import Main4 from './Components4/Main4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='page1' element={<Main />} />
            <Route path='page2' element={<Main2 />} />
            <Route path='page3' element={<Main3 />} />
            <Route path='page4' element={<Main4 />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}
  