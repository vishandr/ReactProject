import { createContext, useState } from 'react';

export const CartContext = createContext({
    // isCartOpen: false,
    // setIsCartOpen: () =>{},
    cartItems: [],
    // setCartItems: () =>{},
    // addToCart: () =>{},
});

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );
    if (existingCartItem) {
    return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    
    // const addToCart = () => {
    //     setCartItems({
    //         cartItems: [...cartItems, 1]
    //     });
    //   };

    const addToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
      };
    
    const value = {
        cartItems,
        addToCart,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
