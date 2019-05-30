import React from 'react'
import productsData from './schoolProducts'
import Product from './products'

function MainContent() {

  const allproducts = productsData.map(item => <Product product={item} key = {item.id} />)

  return(


    <main>
        {allproducts}
    </main>
   )
  };

export default MainContent
