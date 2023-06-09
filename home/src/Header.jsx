import React from 'react'
// import MiniCart from '../../cart/src/MiniCart'

// import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

export default function Header({ app }) {
  return (
    <>
      <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
        Tina's Motorcycles shop the World || {app.name}
      </div>
      <Login />
    </>
  )
}

// import React from 'react'
// import { Link } from 'react-router-dom'

// import MiniCart from 'cart/MiniCart'
// import Login from 'cart/Login'

// export default function Header() {
//   return (
//     <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
//       <div className='flex'>
//         <div className='flex-grow flex'>
//           <Link to='/'>Fidget Spinner World</Link>
//           <div className='mx-5'>|</div>
//           <Link id='cart' to='/cart'>
//             Cart
//           </Link>
//         </div>
//         <div className='flex-end relative'>
//           <MiniCart />
//           <Login />
//         </div>
//       </div>
//     </div>
//   )
// }
