import React from 'react';
import useStore from '../store';
const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useStore();
  const increaseQuantity = ({ itemId }) => {
    cartItems.map((currentCartItem) => {
      if (currentCartItem._id === itemId) {
        currentCartItem.quantity += 1;
      }
      return currentCartItem;
    });
    console.log(cartItems, 'after increasing quantity');
  };
  return (
    <div className="bg-oasis pt-20 min-h-screen ">
      <div className="border-2 border-black p-16">
        {cartItems.map((item) => {
          // console.log(cartItems);
          return (
            <div
              key={item._id}
              className="flex space-x-32 p-5 border-2 border-green-700"
            >
              <img
                src={item.image}
                alt=""
                className="h-52 w-52 border-2 border-yellow-500"
              />
              <div className="border-2 border-yellow-500">{item.name}</div>
              <span>
                <button className="w-6 bg-slate-700 text-white rounded-full">
                  -
                </button>
                <span className="p-3 m-1 bg-indigo-900 text-white rounded-full">
                  Quantity ({item.quantity})
                </span>
                <button
                  // onClick={addItemToCart({ item: item })}
                  className="w-6 bg-slate-700 text-white rounded-full"
                >
                  +
                </button>
              </span>
              <div className="border-2 border-yellow-500">Rs.{item.price}</div>

              {/* <div className="border-2 border-black h-10 w-8"> */}
              {/* <i className=" fa fa-trash  border-2 border-yellow-400 w-6 h-6"></i> */}

              <button onClick={() => removeItemFromCart({ itemId: item._id })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
