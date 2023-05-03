import React from 'react';

import Product from '../../atoms/product/Product';

import {Props} from './types';

const MainMenu = (props : Props) => {
    const products = props.products;
    return <> {
        products.map(product => {
            return <Product product={product}/>
        })
    } </>
}

export default MainMenu;
