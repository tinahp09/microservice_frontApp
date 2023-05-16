import React, { useState, useEffect } from 'react'

import { getProducts, currency } from './products'

export default function HomeContent() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <img
            className='h-48 w-full rounded-md'
            src={product.image}
            alt={product.name}
          />
          <div className='flex'>
            <div className='flex-grow'>
              <a className='text-xl font-bold'>{product.name}</a>
            </div>
            <div className='flex-end'>
              <p className='text-lg font-bold'>
                {currency.format(product.price)}
              </p>
            </div>
          </div>
          <div className='text-sm mt-4'>{product.description}</div>
        </div>
      ))}
    </div>
  )
}
