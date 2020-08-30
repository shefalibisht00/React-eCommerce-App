import React from 'react';

import ShopCollectionItem from '../shop-collection-item/shop-collection-item';
import './shop-collection.style.scss';

const ShopCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {/* Display only 4-5 items in the preview */}
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ShopCollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ShopCollection;