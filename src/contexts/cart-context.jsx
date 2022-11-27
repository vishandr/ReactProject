import { GraphQLEnumType } from 'graphql';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

//workable variant
// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === productToAdd.id
//     );
//   if (existingCartItem) {
//   return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//   );
//   }
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

//use this for green icon 'add to cart'
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    const selectedAttr = productToAdd.attributes.map((attribute) => ({
      id: attribute.id, item: attribute.items[0].value
    }));
    
    if (existingCartItem) {
    return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    }
    return [...cartItems, { ...productToAdd, quantity: 1, selectedAttr: selectedAttr }];
};

//use this for button 'add to cart' from PDP
const addCartItemPDP = (cartItems, productToAdd, cartItemsAttributes) => {
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
    //добавить в массив cartItemsAttributes id добавляемого єлемента и в строке ниже добавляя 
    //selectedAttr фильтровать этот элемент из массива
    return [...cartItems, { ...productToAdd, quantity: 1, selectedAttr: cartItemsAttributes }];
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
    const [cartItemsAttributes, setCartItemsAttributes] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState('USD');
    const [currentCurrencySymbol, setCurrentCurrencySymbol] = useState('$');
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleDropdown = () => {
      (isOpen) ? setIsOpen(false) : setIsOpen(true);
  }

  const closeCurrencyMenu = () => setIsOpen(false);

    const onCurrencySelect = (event) => {
      setCurrentCurrencyLabel(event.target.attributes[1].value);
      setCurrentCurrencySymbol(event.target.attributes[2].value);
      setIsOpen(false);
    }

    const saveAttributes = (event) => {
        const existingAttribute = cartItemsAttributes.find(item => item.id === event.target.parentNode.parentNode.attributes[0].nodeValue);
      if (existingAttribute){
          return cartItemsAttributes.map((item) => 
          item.id === event.target.parentNode.parentNode.attributes[0].nodeValue 
          ? {
              "id": event.target.parentNode.parentNode.attributes[0].nodeValue,
              "item": event.target.attributes[0].nodeValue
            }
          : item)
      }
      return [...cartItemsAttributes, {
              // "product_id": productId,
              "id": event.target.parentNode.parentNode.attributes[0].nodeValue,
              "item": event.target.attributes[0].nodeValue,
          }]
      };

        const addAttributesToCart = (productId) => {
          setCartItemsAttributes(saveAttributes((cartItemsAttributes, productId)));
          // console.log(cartItemsAttributes)
        };

//переписываем массив cartItems, в котором при клике на атрибут - переписываем этот элемент с новыми атрибутами, а остальные элементы переносим как есть
const changeSelectedAttribute = (cartItems, product, event) => {
    setCartItems(cartItems.map(item => item.name === product.name
          ? {...item, selectedAttr: item.selectedAttr.map(attribute => attribute.id === event.target.parentNode.parentNode.firstChild.firstChild.nodeValue
            ? {"id": attribute.id,
              "item": event.target.firstChild.nodeValue}
              : attribute)}
          : item)
      )}


//переписываем массив cartItems из компоненты CartPageItem, в котором при клике на атрибут - переписываем этот элемент с новыми значениями, а остальные элементы переносим как есть
const changeSelectedAttributeFromCartPage = (cartItems, product, event) => {
  setCartItems(cartItems.map(item => item.name === product.name
        ? {...item, selectedAttr: item.selectedAttr.map(attribute => attribute.id.toUpperCase() === event.target.parentNode.parentNode.firstChild.firstChild.nodeValue
          ? {"id": attribute.id,
            "item": event.target.firstChild.nodeValue}
            : attribute)}
        : item)
      )}

    const addToCartPDP = (productToAdd) => {
        setCartItems(addCartItemPDP(cartItems, productToAdd, cartItemsAttributes));
        // setCartItemsAttributes([])
      };
    
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
          (total, cartItem) => total + cartItem.quantity * cartItem.prices.find((price) => 
          price.currency.label === currentCurrencyLabel).amount, 0);
        setCartTotal(cartTotal.toFixed(2));
      }, [cartItems]);

    
    const value = {
        cartItems,
        addToCart,
        addToCartPDP,
        removeItemFromCart,
        cartCount,
        cartTotal,
        onCurrencySelect,
        currentCurrencyLabel,
        currentCurrencySymbol,
        isOpen,
        toggleDropdown,
        closeCurrencyMenu,
        isCartOpen,
        setIsCartOpen,
        cartItemsAttributes,
        addAttributesToCart,
        changeSelectedAttribute,
        changeSelectedAttributeFromCartPage
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
