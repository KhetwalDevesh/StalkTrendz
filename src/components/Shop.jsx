import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
export const baseURL = 'https://innocenti.onrender.com/products';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log('inside useEffect');
        const res = await axios.get(baseURL);
        const productsData = [...res.data];
        //console.log(productsData);
        // setProducts(productsData);
        const updatedProductsData = productsData.map((product) => {
          const newProduct = {
            _id: product._id,
            name: product.name,
            image: product.image,
            brand: product.brand,
            category: product.category,
            countInStock: product.countInStock,
            description: product.description,
            price: product.price,
          };
          //console.log(newProduct);
          return newProduct;
          // setProducts([...products, newProduct]);
        });
        setProducts([...updatedProductsData]);
        // setProducts(productsToBeAdded);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-20 gap-y-24 bg-oasis h-full  p-28 items-center ">
      {products.map((product) => {
        return (
          <div className="flex flex-col border-b-4 border-black p-5">
            <Link to={`/product/${product._id}`}>
              <img
                className="h-96 w-80 border-4 border-black "
                src={product.image}
                alt=""
              />
            </Link>
            <br />
            <span>{product.name}</span>
            <span>{product.brand}</span>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
