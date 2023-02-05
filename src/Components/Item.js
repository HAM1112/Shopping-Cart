import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./items.css"

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
    <div>
      
        {Book? <div className='book-display'>
          <div className='book-image'>
            <img src={Book.volumeInfo.imageLinks.thumbnail} alt="" srcset="" />
          </div>
          <div className='book-details'>
            <h1>{Book.volumeInfo.title}</h1>
            <p>description</p>
            <p>autors</p>
            <p>no. page</p>
            <p>publis date</p>
            <p>publisher</p>
            <p>rating</p>
           <span>price</span>
          
          </div>
        </div> : <div className='loading'>Loading.....</div> }
      
    </div>
  )
}


export default Item