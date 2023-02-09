import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Shop.css"
import { Link } from 'react-router-dom'

function Shop(props) {
  const [Books, setBooks] = useState([]);
  const [Item, setItem] = useState('');

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        setBooks(res.data.items)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if(Item === ''){
      console.log('no items')
    }else{
      props.passData(Item)
    }
  }, [Item]);

  const handleAddCart = (item)=>{
    setItem(item)
  }

  return (
    <div className='shop-list'>
       {Books.map((book , index)=>{
          const bookInfo = book.volumeInfo;
          let bookRating ="";
          if(bookInfo.averageRating){
            bookRating = bookInfo.averageRating 
          }else{
            bookRating = 3.8; 
          }
          const bookPrice = (bookRating*2.5)  
          return (
            <Link to={`/item/${book.id}`}>
              <div className='book-card' key={index}>
                <img src={bookInfo.imageLinks.thumbnail} alt="" />
                <h3>{bookInfo.title}</h3>
                <div>
                  <p>Rating :{bookRating}</p>
                  <p>${bookPrice}</p>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    handleAddCart({
                      title: bookInfo.title ,
                      imageLink: bookInfo.imageLinks.smallThumbnail,
                      id:book.id,
                      price: bookPrice}
                      )
                    }
                  }>Add To Cart</button>
              </div>
            </Link>
          )
       })}
    </div>
  )
}


export default Shop