import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.scss'
// import SafeComponent from './SafeComponent'
//load header asynchronously
// const Footer = React.lazy(() => import("home/Footer"));
import Header from 'home/Header'
// const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'
import PDPContent from './PDPContent'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='mt-10 text-3xl mx-auto max-w-6xl'>
        <Header app={{ name: 'pdp' }} />

        <div className='my-10'>
          <Routes>
            <Route path='/product/:id' element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
