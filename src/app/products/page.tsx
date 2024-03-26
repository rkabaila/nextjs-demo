import { Product, ProductCard } from "@/components/product-card";
import { promises as fs } from "fs";

const Page = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/products.json",
    "utf8"
  );

  const products: Product[] = JSON.parse(file);

  return (
    <div className="h-screen flex flex-col items-center px-5 py-10">
      <ul className="flex flex-row">
        {products.map(({ id, name, price, description }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
