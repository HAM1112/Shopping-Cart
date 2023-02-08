import React from 'react'
import { useState, useEffect } from 'react'

function Cart(props) {
  const [Items, setItems] = useState(props.items);
  
  console.log(Items);
  return (
    <div>
        Card
    </div>
  )
}

export default Cart