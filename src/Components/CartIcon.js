import { CART_ICON } from "../../Utils/constant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cartLength = useSelector((state) => {
    return state.cart.items.length;
  });

  return (
    <Link
      className="w-6 h-6 cursor-pointer relative hover:scale-110 transition-transform"
      to="/CartContent"
    >
      <img alt="Shopping Cart" src={CART_ICON} className="w-full h-full" />
      {cartLength > 0 && (
        <div className="text-xs font-semibold text-white absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-red-500 min-w-[18px] text-center">
          {cartLength}
        </div>
      )}
    </Link>
  );
};
export default CartIcon;
