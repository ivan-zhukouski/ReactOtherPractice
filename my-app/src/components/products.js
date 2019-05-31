import React from 'react'

function Product(props) {
   return(
     <div>
       <input type="checkbox" checked={props.item.completed} />
       <p>{props.item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} - {props.item.text}</p>
     </div>
   )
}
export default Product
