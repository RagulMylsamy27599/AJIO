import CartItem from "./CartItem.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { removeAllItem } from "../../Utils/cartSlice";

const CartContent = () => {
  const cartList = useSelector((state) => {
    return state.cart.items;
  });
  const dispatch = useDispatch();

  const [checkedCartList, setCheckedCartList] = useState([]);
  useEffect(() => {
    setCheckedCartList(cartList);
  }, [cartList]);

  const totalMRP = checkedCartList.reduce((total, cur) => {
    return total + cur?.wasPriceData?.value;
  }, 0);
  const actualPRice = checkedCartList.reduce((total, cur) => {
    return total + cur?.price?.value;
  }, 0);

  if (cartList.length === 0) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center pt-[20%] text-center">
          <p className="text-xl text-[#afabab] mb-4">Your cart is empty</p>
          <p className="text-sm text-[#afabab]">
            Add some items to get started!
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-start pt-20 px-4">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <div className="space-y-4">
          {cartList.map((item) => {
            return (
              <CartItem
                itemData={item}
                key={item?.code}
                checkedCartList={checkedCartList}
                setCheckedCartList={setCheckedCartList}
              />
            );
          })}
        </div>
      </div>
      <div className="w-px bg-gray-200 mx-8"></div>
      <div className="flex flex-col w-80 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Price Details</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Discount on MRP</span>
            <span className="text-green-600">- ₹{totalMRP - actualPRice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Platform Fee</span>
            <span>₹ 20</span>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total Amount</span>
            <span>₹ {actualPRice + 20}</span>
          </div>
        </div>
        <button className="bg-red-500 py-3 font-semibold text-white rounded-lg mt-4 cursor-pointer hover:bg-red-600 transition-colors w-full">
          Place Order
        </button>
        <button
          onClick={() => dispatch(removeAllItem())}
          className="bg-gray-500 py-3 font-semibold text-white rounded-lg mt-2 cursor-pointer hover:bg-gray-600 transition-colors w-full"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
export default CartContent;
