import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    // isCartOpen: false,
    // setIsCartOpen: () =>{},
    // cartItems: [],
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

const removeCartItem = (cartItems, productToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
      );
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    };
    return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);
    
    const addToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
      };
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
      }, [cartItems]);

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce(
    //         (total, cartItem) => total + cartItem.quantity * cartItem.prices[0].amount, 0);
    //     setCartTotal(newCartTotal);
    // }, [cartItems])
    
    const value = {
        cartItems,
        addToCart,
        removeItemFromCart,
        cartCount,
        // cartTotal
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
