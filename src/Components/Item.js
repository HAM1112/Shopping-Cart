import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./Shop.css"

function Item({match}) {
  const {id} = useParams();
  const [Book, setBook] = useState('');

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        console.log(res.data);
        setBook(res.data)
      })
      .catch(err => {
        console.error(err);
      });
      console.log(id);
  },[]);



  return (
    <div className='book-display'>
      <div > 
        {Book? <div>{Book.volumeInfo.title}</div> : <div>Loading</div> }
      </div>
    </div>
  )
}


export default Item