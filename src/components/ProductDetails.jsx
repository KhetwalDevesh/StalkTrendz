import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { baseURL } from './Shop';
const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();
  const params = useParams();
  console.log(params.id);
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
  console.log(productDetail);
  if (productDetail === undefined) return <div>Loading...</div>;
  return (
    <div>
      <div className="flex flex-col">
        <img src={productDetail.image} className="w-10 h-10" />
        <span>{productDetail.name}</span>
        <span>{productDetail.brand}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
