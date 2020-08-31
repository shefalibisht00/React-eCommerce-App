import React from 'react';

import ShopCollectionItem from '../shop-collection-item/shop-collection-item';


import './shop-collection.style.scss';

const ShopCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <ShopCollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ShopCollection;
