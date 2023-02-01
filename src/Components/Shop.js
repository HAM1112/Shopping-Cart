import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Shop.css"

function Shop() {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    // Replace API_KEY with your actual API key
    const API_KEY = "AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI";

    // Generate a random number between 1 and 1000
    

    // Make the API request
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        console.log(res.data.items);
        setBooks(res.data.items)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

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
            <div className='book-card'>
              <img src={bookInfo.imageLinks.thumbnail} alt="" />
              <h3>{bookInfo.title}</h3>
              <div>
                <p>Rating :{bookRating}</p>
                <p>${bookPrice}</p>
              </div>
              <button>Add To Cart</button>
            </div>
          )
       })}
    </div>
  )
}

export default Shop