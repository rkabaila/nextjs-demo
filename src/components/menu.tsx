import { usePathname } from "next/navigation";
import Link from "next/link";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-300 flex justify-center">
      <nav className=" p-3 w-full max-w-screen-lg">
        <ul className="flex flex-row">
          <li
            className={`px-10 py-2 ${
              pathname === "/products" ? "bg-neutral-400" : ""
            }`}
          >
            <Link href="/products">Products</Link>
          </li>
          <li
            className={`px-10 py-2 ${
              pathname === "/cart" ? "bg-neutral-400" : ""
            }`}
          >
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
