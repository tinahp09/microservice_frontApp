// import React from 'react'

// export default class SafeComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { hasError: true }
//   }

//   static getDrivedStateFromError(error) {
//     return { hasError: true }
//   }

//   componentDidCatch() {}

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>
//     }

//     return this.props.children
//   }
// }
