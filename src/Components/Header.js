import { APP_LOGO, WISHLIST_ICON } from "../../Utils/constant";
import { Link, NavLink } from "react-router-dom";
import Cart from "./CartIcon";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 bg-white shadow-md fixed w-full z-20">
      <Logo />
      <Categories />
      <Actions />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="w-32">
        <img alt="AJIO Logo" src={APP_LOGO} className="h-8" />
      </div>
    </Link>
  );
};

const Categories = () => {
  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return "px-4 bg-[#2F4254] mx-2 py-2 rounded-md text-white transition-colors";
    } else {
      return "px-4 hover:bg-gray-100 mx-2 py-2 rounded-md transition-colors";
    }
  };
  return (
    <div className="hidden md:block">
      <ul className="flex">
        <li>
          <NavLink to="/men" className={activeStyle}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to={"/women"} className={activeStyle}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to={"/kids"} className={activeStyle}>
            Kids
          </NavLink>
        </li>
        <li>
          <NavLink to={"/beauty"} className={activeStyle}>
            Beauty
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="flex items-center gap-4">
      <Profile />
      <div className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform">
        <img alt="Wishlist" src={WISHLIST_ICON} className="w-full h-full" />
      </div>
      <Cart />
    </div>
  );
};

export default Header;
