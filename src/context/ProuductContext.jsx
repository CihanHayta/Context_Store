
import { createContext, useEffect, useState } from "react";
import api from "../api";



export const ProductContext = createContext();

const ProuductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");



    useEffect(() => {
        // Eğer seçili bir kategori varsa buna istek at yoksa tüm ürünlere istek at
        const url =
          selectedCategory === "all"
            ? "/products"
            : `/products/category/${selectedCategory}`;
        api.get(url).then((res) => {
          setProducts(res.data);
        });
      }, [selectedCategory]);


    return (

        <ProductContext.Provider value={{ products, setProducts, selectedCategory, setSelectedCategory }}
        
        >
            {children}
        </ProductContext.Provider>
    );

};


export { ProuductProvider };



