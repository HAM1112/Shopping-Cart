import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Shop.css"
import { Link } from 'react-router-dom'

function Item() {

  const [Book, setBook] = useState({});

  useEffect(() => {
  
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        console.log(res.data.items);
           
      })
      .catch(err => {
        console.error(err);
      });
  }, []);



  return (
    <div className='shop-list'>
       Item
    </div>
  )
}


export default Item