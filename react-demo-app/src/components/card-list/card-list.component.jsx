import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';


export const CardList = props => (

    <div className='card-list'>
        {props.userList.map(user => (
            <Card key={user.id} userList={user} />
        ))}
    </div>

);


