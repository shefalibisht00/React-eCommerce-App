import React from 'react';
import './menu-item.style.scss'


const MenuItem = ({ title, size, imgurl }) => (
    <div   className={`${size} menu-item`}>
        <div className='background-image' style={{ background: `url(${imgurl})` }} />

        <div className='content'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <span className='subtitle'> Buy now! </span>
        </div>
    </div>
);

export default MenuItem;