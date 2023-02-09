import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./items.css"

function Item(props) {
  const {id} = useParams();
  const [Book, setBook] = useState('');
  const [Item, setItem] = useState('');
  
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDsK20p3fvvNkpgE4xwfasAYMdcvlVRKTI`    )
      .then(res => {
        console.log(res.data);
        setBook(res.data)
      })
      .catch(err => {
        console.error(err);
      });
  },[]);

  useEffect(() => {
    if(Item === ''){
      console.log('no items')
    }else{
      props.passData(Item)
    }
  }, [Item]);

  const handleAddCart = (item)=>{
    console.log(item);
    setItem(item)
  }

  return (
    <div >  
        {Book? <div className='book-display'>
          <div className='book-image'>
            <img src={Book.volumeInfo.imageLinks.thumbnail} alt='image'  />
          </div>
          <div className='book-details'>
            <h1>{Book.volumeInfo.title}</h1>
            <p className='authors-details'>Author : {(Book.volumeInfo.authors).map((author)=>{return <p>{author}</p> })}</p>
            <p>Pages : {Book.volumeInfo.pageCount}</p>
            <p>Date of publication : {Book.volumeInfo.publishedDate}</p>
            <p>Published by : {Book.volumeInfo.publisher}</p>
            {Book.volumeInfo.averageRating ? <p>Rating : {Book.volumeInfo.averageRating}</p> : <p>Rating : 3.8</p> }
            {Book.volumeInfo.averageRating ? <p>Price : ${(Book.volumeInfo.averageRating)*2.5}</p> : <p>Price : {(3.8)*2.5}</p> }
            <button onClick={(e)=>{
                e.preventDefault();
                handleAddCart({
                    title: Book.volumeInfo.title , 
                    imageLink: Book.volumeInfo.imageLinks.smallThumbnail, 
                    id:Book.id , 
                    price: Book.volumeInfo.averageRating ? Book.volumeInfo.averageRating * 2.5 : 3.8 *2.5}
                    )
                  }
                }>Add to Cart</button>
          </div>
        </div> : <div className='loading'>Loading.....</div> }
      
    </div>
  )
}


export default Item