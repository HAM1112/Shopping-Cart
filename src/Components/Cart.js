import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'

function Cart(props) {
  const [Items, setItems] = useState(props.items);
  
  console.log(Items);
  return (
    <div className='Cart'>
        {Items ? 
          Items.map((item)=>{
            return (
              <div className='purchase-item'>
                <div><img src={item.imageLink} alt="image"/></div>
                <h4>{item.title}</h4>
                <div>Qty</div>
                <div>${item.price}</div>
              </div>
            )
          })
          :null
        }
    </div>
  )
}

export default Cart
        