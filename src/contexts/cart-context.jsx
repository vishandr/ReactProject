import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    
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

// const rememberAttributes = (cartItemsAttributes, productToAdd) => {
  // if (cartItemsAttributes.length === 0){
    // return [{ id: productToAdd.id, attributes: productToAdd.attributes}]
  // };
  // return [...cartItemsAttributes, { ...productToAdd}]
// };

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsAttributes, setCartItemsAttributes] = useState([]);
    // const [productAttributes, setProductAttributes] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState('USD');
    const [currentCurrencySymbol, setCurrentCurrencySymbol] = useState('$');
    const[isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      (isOpen) ? setIsOpen(false) : setIsOpen(true);
  }

  const closeCurrencyMenu = () => setIsOpen(false);

    // const onCurrencySelect = (event) => {
    //     let label = event.target.value.slice(0,3)
    //     setCurrentCurrencyLabel(label);
    //     let symbol = event.target.value.slice(3)
    //     setCurrentCurrencySymbol(symbol);
    //     // setCurrentCurrencySymbol(data.currency.find((el) => el.label === event.target.value).symbol);
    //     };
        
    // setCartItemsAttributes(productToAdd) => {};

    const onCurrencySelect = (event) => {
      setCurrentCurrencyLabel(event.target.attributes[1].value);
      setCurrentCurrencySymbol(event.target.attributes[2].value);
      setIsOpen(false);
    }

    // const getAttributes = (productToAdd) => {
    // setCartItemsAttributes(rememberAttributes(cartItemsAttributes, productToAdd))
    // };

    // const addAttributesToCart = (productToAdd) => {
    //   setCartItemsAttributes(addCartItemAttributes((cartItemsAttributes, productToAdd)))
    // };

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

      useEffect(() => {
        const cartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity* cartItem.prices.find((price) => 
          price.currency.label === currentCurrencyLabel).amount, 0);
        setCartTotal(cartTotal);
      }, [cartItems]);

    
    const value = {
        cartItems,
        addToCart,
        removeItemFromCart,
        cartCount,
        cartTotal,
        onCurrencySelect,
        currentCurrencyLabel,
        currentCurrencySymbol,
        cartItemsAttributes,
        isOpen,
        toggleDropdown,
        closeCurrencyMenu,
        // getAttributes,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
