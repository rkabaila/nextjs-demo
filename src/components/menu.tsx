import { usePathname } from "next/navigation";
import Link from "next/link";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-300 flex justify-center">
      <nav className="w-full max-w-screen-lg">
        <ul className="flex flex-row">
          <li className={` ${pathname === "/products" ? "shadow-md" : ""}`}>
            <Link href="/products" className="block px-10 py-7">
              Products
            </Link>
          </li>
          <li className={`${pathname === "/cart" ? "shadow-md" : ""}`}>
            <Link href="/cart" className="block px-10 py-7">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
