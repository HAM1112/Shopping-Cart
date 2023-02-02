import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Shop.css"
import { Link } from 'react-router-dom'

function Shop() {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
  
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        console.log(res.data.items);
        setBooks(res.data.items)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleCardClick = ()=>{
    console.log("hii");
  }

  return (
    <div className='shop-list'>
       {Books.map((book)=>{
          const bookInfo = book.volumeInfo;
          let bookRating ="";
          if(bookInfo.averageRating){
            bookRating = bookInfo.averageRating 
          }else{
            bookRating = 3.8; 
          }
          const bookPrice = (bookRating*2.5)  
          return (
            <Link to={`/shop/${book.id}`}>
              <div className='book-card' onClick={handleCardClick}>
                <img src={bookInfo.imageLinks.thumbnail} alt="" />
                <h3>{bookInfo.title}</h3>
                <div>
                  <p>Rating :{bookRating}</p>
                  <p>${bookPrice}</p>
                </div>
                <button>Add To Cart</button>
              </div>
            </Link>
          )
       })}
    </div>
  )
}


export default Shop