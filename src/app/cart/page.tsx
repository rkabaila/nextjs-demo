"use client";

import { useCart } from "@/components/cartContextProvider";

const Page = () => {
  const cart = useCart();

  return (
    <ul className="flex w-full p-10  h-screen flex flex-col items-center">
      {cart?.items &&
        Object.values(cart.items).map(({ id, name, price, description }) => (
          <div
            key={id}
            className="flex flex-row w-full py-3 my-2 max-w-screen-lg shadow-md"
          >
            <span className="mr-4">{name}</span>
            <span className="mr-4">{description}</span>
            <span className="mr-4 flex flex-grow justify-end">{price} €</span>
            <button
              onClick={() => cart.removeProduct(id)}
              className="bg-red-400 text-white px-4"
            >
              Remove
            </button>
          </div>
        ))}
    </ul>
  );
};

export default Page;
