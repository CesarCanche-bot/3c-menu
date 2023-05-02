import React from 'react';

//Todo add missing optional properties
type product = {
    name: string;
    price: number;
    description: string
};

type ProductsPropsType = {
    products: [] | product[];
}
const Products = ({products}:ProductsPropsType) => {
    return <div>Product list view</div>
}

export default Products;
