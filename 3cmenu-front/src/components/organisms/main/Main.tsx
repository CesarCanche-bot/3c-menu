import React, {useEffect, useState} from "react";
import axios from 'axios';

import Header from "../../molecules/header/Header";
import MainMenu from "../../molecules/mainMenu/MainMenu";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products/")
            .then(response=> setProducts(response.data.products))
            .catch(e=> console.log("error at get products", e.response));
    },[]);

    return <>
            <Header clasName="container" title = "3c COMIDAS" subtitle = "Menu del dia"/>
            <MainMenu products={products}/>
        </> 
}

export default Main;