export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const ProductCard = ({ id, name, price, description }: Product) => {
  return (
    <li
      key={id}
      className="p-3 border-solid border-2 border-slate-500 rounded m-3 cursor-pointer hover:scale-105 "
    >
      <h2 className="font-medium pb-5">{name}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <button className="bg-slate-500 text-white px-5 mt-4">Add to cart</button>
    </li>
  );
};
