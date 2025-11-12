"use client";

import { createContext, use, useContext, useEffect, useState } from "react";

export type CartItem = {
  productId: string;
  variant: string;
  qty: number;
};
type CartContext = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, variant: string) => void;
  changeQty: (item: CartItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQty: () => {},
  clearCart: () => {},
});
export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [initCart, setInitCart] = useState(false);
  // Do all of the logic here
  // Sync with local storage
  useEffect(() => {
    // Initialize Cart
    if (!initCart) {
      const loaded = localStorage.getItem("cart");
      if (!loaded) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      if (loaded) {
        setCart(JSON.parse(loaded) as CartItem[]);
      }
      setInitCart(true);
    }
  }, []);

  useEffect(() => {
    // Only set when it's initialized
    if (initCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    // Cases
    // Product & Variant not in cart -> Instant Add
    // Product & Variant in cart -> Update qty
    // Product in cart but different variant -> Add new
    // Check Cart -> Check Variant
    const newCart = [...cart];

    const existingItem = newCart.find(
      (i) => i.productId === item.productId && i.variant === item.variant
    );
    if (existingItem) {
      existingItem.qty += item.qty;
    } else {
      newCart.push(item);
    }

    setCart(newCart);
  };
  const removeFromCart = (productId: string, variant: string) => {
    const newCart = cart.filter(
      (i) => !(i.productId === productId && i.variant === variant)
    );
    setCart(newCart);
  };
  const changeQty = (item: CartItem) => {
    const newCart = [...cart];

    const existingItem = newCart.find(
      (i) => i.productId === item.productId && i.variant === item.variant
    );
    if (existingItem) {
      existingItem.qty = item.qty;
    }

    if (item.qty <= 0) {
      removeFromCart(item.productId, item.variant);
    } else {
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
