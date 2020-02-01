import React from 'react';
import './Card.css';

export default function Card(props) {
  const handleDelete = () =>{
      props.onDelete(props.cardId, props.listId);
  }

  return (
    <div className='Card'>
      <button
        onClick={handleDelete}
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}