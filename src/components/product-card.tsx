"use client";

import { useState } from "react";
import { useCart } from "./cartContextProvider";

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const ProductCard = ({ id, name, price, description }: Product) => {
  const cart = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <div className="flex flex-col">
      <li
        key={id}
        className="p-3 border-solid border-2 border-slate-500 rounded m-3 cursor-pointer hover:scale-105 flex flex-col"
      >
        <h2 className="font-medium pb-5">{name}</h2>
        <p>Price: {price} €</p>
        <p>Description: {description}</p>
        <button
          className="bg-slate-500 text-white px-5 mt-4"
          onClick={() => {
            cart?.addProduct({ id, name, price, description });
            setShowConfirmation(true);
            setTimeout(() => {
              setShowConfirmation(false);
            }, 1000);
          }}
        >
          Add to cart
        </button>
      </li>
      {showConfirmation && (
        <span className="bg-green-500 text-white flex justify-center">
          Added to cart
        </span>
      )}
    </div>
  );
};
