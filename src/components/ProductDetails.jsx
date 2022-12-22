import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { baseURL } from './Shop';
import '../css/index.css';
// import '../fonts/ClashDisplay-Bold.woff2';
// import '../fonts/ClashDisplay-Regular.woff2';
import '../css/main.css';
import useStore from '../store';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useStore();
  const [productDetail, setProductDetail] = useState();
  const params = useParams();
  console.log(params.id);
  // const addItemToCart = useStore((state) => state.addItemToCart);
  const addItemToCartLocal = () => {
    addItemToCart({ item: productDetail });
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        console.log(baseURL);
        console.log(params.id);
        console.log(`${baseURL} / ${params.id}`);
        const productData = await axios.get(`${baseURL}/${params.id}`);
        setProductDetail(productData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetails();
  }, [params.id]);
  // console.log(productDetail);
  console.log(cartItems);
  if (productDetail === undefined) return <div>Loading...</div>;
  return (
    <div className="bg-oasis">
      <div className="flex p-44 ">
        <img
          src={productDetail.image}
          className="w-[500px] h-[600px] border-4 border-black"
        />
        <div className="flex flex-col p-8 space-y-8">
          <div className="flex space-x-4 text-4xl uppercase">
            <span>{productDetail.name}</span>
            <span>-</span>
            <span>{productDetail.brand}</span>
          </div>
          <div className="flex space-x-10">
            <span className=" text-2xl">Rs.{productDetail.price}</span>
            <span>
              <button className="w-6 bg-slate-700 text-white rounded-full">
                -
              </button>
              <span className="p-3 m-1 bg-indigo-900 text-white rounded-full">
                Quantity
              </span>
              <button
                // onClick={increaseQuantity}
                className="w-6 bg-slate-700 text-white rounded-full"
              >
                +
              </button>
            </span>
          </div>
          <button
            onClick={addItemToCartLocal}
            className="w-48 h-16 border-2  bg-black text-white rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
