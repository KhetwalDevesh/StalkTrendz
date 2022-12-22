import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';
const Header = () => {
  let cartQuantity = 0;
  const { cartItems, addItemToCart } = useStore();
  // _id: item._id,
  // name: item.name,
  // brand: item.brand,
  // price: item.price,
  // image: item.image,
  // countInStock: item.countInStock,
  // currentQuantity: 1,
  console.log(`header : ${cartItems}`);
  const countAllCartItems = () => {
    cartItems.map((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  };
  countAllCartItems();
  return (
    <div className=" flex items-center justify-between p-8 w-full h-20  bg-oasis fixed">
      <Link to="/">
        <div className=" font-bold text-4xl ">Stalktrendz</div>
      </Link>
      <div className=" flex space-x-20  text-xl uppercase">
        <span>Contact</span>
        <Link to="/cart">
          <span>Cart{cartQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
