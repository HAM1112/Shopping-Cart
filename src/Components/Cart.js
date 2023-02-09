import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Cart.css'

function Cart(props) {
  const [Items, setItems] = useState('');
  const [Total, setTotal] = useState(0);
  
  useEffect(()=>{
    setItems(props.items)
    let total = 0;
    console.log((props.items).map((item)=> {return total += item.price}))
  },[props])
  
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
          : <div className='empty-msg'>
            Cart is empty...............
          </div>
        }
    </div>
  )
}

export default Cart
        