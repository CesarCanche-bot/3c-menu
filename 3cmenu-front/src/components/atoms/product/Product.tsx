import React from 'react';

import { Props } from './types';

const Product = (props:Props) =>{
    return <div className={props.className}>
            <div>{props.product.title}</div>
            <div>{props.product.price}</div>
            <div>{props.product.rating}</div>
        </div>
}

export default Product;