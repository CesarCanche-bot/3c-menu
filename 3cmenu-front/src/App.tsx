import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainTitle from "./views/MainTitle";
import Products from "./views/Products";
import "../src/css/main-title.css";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/").then(response => {
            console.log('response products', response.data);
            setProducts(response.data.products);
        }).catch(e => {
            console.log('error at get products', e.response)
        });
    }, []);

    return (
        <div className="App">
            <MainTitle />
            <Products products={products}/>
        </div>
    );
}

export default App;
