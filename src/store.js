import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
const useStore = (set, get) => ({
  totalItemsInCart: 0,
  cartItems: [],
  addItemToCart: set((state) => (item) => {
    const totalItemsInCart = state.totalItemsInCart + 1;
    const newCartItem = {
      _id: item._id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image,
      countInStock: item.countInStock,
      currentQuantity: 1,
    };
    const isItemInCart = state.cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart) {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      set({
        cartItems: updatedCartItems,
      });
    }
    // set((state)=>{state.cartItems:[...state.cartItems,newCartItem]})
    else {
      const updatedCartItems = [...state.cartItems, newCartItem];
      set({
        cartItems: updatedCartItems,
      });
    }
  }),
});
// console.log(state.cartItems);
// useStore = persist(useStore);
useStore = create(useStore);
export default useStore;
