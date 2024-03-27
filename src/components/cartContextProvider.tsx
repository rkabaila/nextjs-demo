"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

import { Product } from "./product-card";

interface CartContext {
  items: Record<string, Product>;
  productIsInCart: (productId: string) => boolean;
  addProduct: (product: Product) => void;
  //   updateProduct: (cartItemData: UpdateCartItemInput) => Promise<FetchResult<UpdateProductsInCartMutation>>
  //   clearCart: () => Promise<FetchResult<ClearCartMutation>>
  removeProduct: (productId: string) => void;
}

const CartContext = createContext<CartContext | null>(null);

export const useCart = () => {
  return useContext(CartContext);
};

interface CartContextProviderProps {
  children?: ReactNode;
}

export const CartContextProvider = (props: CartContextProviderProps) => {
  const { children } = props;
  const [items, setItems] = useState<Record<string, Product>>({});
  console.log("items", items);

  const addProduct = (product: Product) => {
    console.log("product", product);
    setItems({ ...items, [product.id]: product });
  };

  const removeProduct = (productId: string) => {
    const { [productId]: _, ...rest } = items;
    setItems(rest);
  };

  const productIsInCart = (productId: string) => !!items[productId];

  return (
    <CartContext.Provider
      value={{
        items,
        productIsInCart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
