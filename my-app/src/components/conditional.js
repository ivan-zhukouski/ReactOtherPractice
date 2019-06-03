import React from 'react'

function Conditional(props) {
  return(
    <div>
      {props.inLoading ? <h1>Loading...</h1> : <h1>I love React!!!</h1>}
    </div>
  )
}

export default Conditional
