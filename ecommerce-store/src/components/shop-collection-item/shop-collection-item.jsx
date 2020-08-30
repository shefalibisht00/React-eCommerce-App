import React from 'react'

import './shop-collection-item.style.scss'

const ShopCollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );


export default ShopCollectionItem;
