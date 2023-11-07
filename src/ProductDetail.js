import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  useLocation } from 'react-router-dom';
import './styles/productDetail.css';

const ProductDetail = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const exchangeRate = 36.52 
  const location = useLocation();
  const product = location.state;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const convertToDollars = (priceInHryvnia) => {
    return (priceInHryvnia / exchangeRate).toFixed(2);
  };


  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]);
    console.log(`Ваш відгук: "${comment}"`);
    alert(`Ваш відгук: "${comment}" додано успішно!`);
    setComment('');

  };

  return (
    <div className='container'>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name}  />
      <p>Ціна: {product.price} грн | {convertToDollars(product.price)} USD</p>
      <p>Опис: {product.description}</p>

      <h3>Коментарі:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <textarea value={comment} onChange={handleCommentChange} />
        <button type="submit">Додати коментар</button>
      </form>
    </div>
  );
};

export default ProductDetail;