import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'home/Header'
import Footer from 'home/Footer'
import CartContent from './CartContent'
import './index.scss'
import 'remixicon/fonts/remixicon.css'

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header app={{ name: 'cart' }} />
    <div className='my-10'>
      <CartContent />
    </div>
    <Footer />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
