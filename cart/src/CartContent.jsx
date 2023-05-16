import React, { useState, useEffect } from 'react'
import MiniCart from './MiniCart'

import { login, jwt } from './cart'
import Login from './Login'

export default function CartContent() {
  const [token, setToken] = useState('')

  useEffect(() => {
    login('sally', '123')
    return jwt.subscribe((val) => setToken(val ?? ''))
  }, [])
  return (
    <div>
      <small className='text-lg' style={{ maxWidth: '200px' }}>
        JWT: {token}
      </small>
      <Login />
      <MiniCart />
    </div>
  )
}
