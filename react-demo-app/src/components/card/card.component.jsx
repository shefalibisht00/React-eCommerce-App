import React from 'react';
import './card.style.css';


export const Card = (props) => (

    <div className='card-container'>
        <img alt="user" src={`https://robohash.org/${props.userList.id}?set=set1&size=150x120`}  ></img>
        <h2> {props.userList.name} </h2>
        <p> {props.userList.email} </p>
    </div>
)

