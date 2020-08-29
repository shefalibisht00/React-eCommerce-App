import React from 'react';
import './search-box.style.css';
import {Card} from '../card/card.component';


export const SearchBox = ( {placeholder, handleChange}) => (

<input className='search' type='search' placeholder={placeholder} onChange= {handleChange } />

);
