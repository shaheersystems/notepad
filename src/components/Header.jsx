import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const links = [
  {
    name: "Product",
    to: "/",
  },
  {
    name: "Download",
    to: "/about",
  },
  {
    name: "Solution",
    to: "/solution",
  },
  {
    name: "Pricing",
    to: "/pricing",
  },
];

function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between px-4 py-3 bg-white">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
      <div className="items-center hidden gap-5 md:flex">
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              to={link.to}
              className="px-4 py-1 rounded hover:bg-gray-100"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="px-4 py-1 text-sm sm:text-md">
          Log in
        </Link>
        <Link
          to="/signup"
          className="px-4 py-1 text-sm text-white bg-black rounded shadow sm:text-md hover:bg-black/80"
        >
          Get Notepad free
        </Link>
      </div>
    </header>
  );
}

export default Header;
