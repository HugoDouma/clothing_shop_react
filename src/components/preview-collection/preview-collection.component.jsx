import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.scss';

const CollectionPreview = ({title, items}) => ( 
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter(item => item.id <= 4)
            .map(({id, ...otherComponents}) => (
                <CollectionItem key={id} {...otherComponents} />
            ))}
        </div>
    </div>
);
export default CollectionPreview;