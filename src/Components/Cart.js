import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart(props) {
  const [Items, setItems] = useState('');
  const [Total, setTotal] = useState(0);
  
  useEffect(()=>{
    setItems(props.items)
    let total = 0; 
    if(props.items === ''){
      console.log('props is empty')
    }else{
      props.items.forEach(item => {
        total += item.price
      });
      setTotal(total)
    }
  },[props])
  
  const handleClick = ()=>{
    alert("Items been checked out");
    setItems('')
  }
  
  return (
    <div className='Cart'>
        {Items ? <div>
          {Items.map((item)=>{
            return (
              <div className='purchase-item'>
                <div>
                  <Link to={`/item/${item.id}`}>
                    <img src={item.imageLink} alt="image"/>
                  </Link>
                </div>
                <h4>{item.title}</h4>
                <div>Qty</div>
                <div>${item.price}</div>
              </div>
            )
          })}
          <div className='checkout'>
            <h2>Cart Total</h2>
            <div>No. of items : {Items.length}</div>
            <div>Total amount : ${Total}</div>
            <button onClick={handleClick}>Checkout</button>
          </div>
          </div>
          : <div className='empty-msg'>
            Cart is empty...............
          </div>
        }
    </div>
  )
}

export default Cart;