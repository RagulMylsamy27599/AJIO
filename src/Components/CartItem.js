import { useDispatch } from "react-redux";
import { removeItem } from "../../Utils/cartSlice";

const CartItem = ({ itemData, checkedCartList, setCheckedCartList }) => {
  const {
    selectedSize,
    name,
    fnlColorVariantData: { brandName, outfitPictureURL } = {},
    price: { value: price } = 0,
    discountPercent,
    wasPriceData: { value: oldPrice },
  } = itemData;
  const removeDispatch = useDispatch();
  const isChecked = checkedCartList?.some((item) => {
    return item.code === itemData?.code;
  });

  const updateCheckedCartList = (e) => {
    if (e.target.checked) {
      setCheckedCartList((prev) => {
        return [...prev, itemData];
      });
    } else {
      let tempList = checkedCartList?.filter((item) => {
        return item.code !== itemData.code;
      });
      setCheckedCartList(tempList);
    }
  };
  return (
    <div className="flex relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        className="absolute top-4 left-4 w-4 h-4 text-blue-600 rounded"
        checked={isChecked}
        onChange={updateCheckedCartList}
      />
      <img
        className="w-20 h-20 rounded object-cover ml-8"
        alt={`${brandName} - ${name}`}
        src={outfitPictureURL}
      />
      <div className="flex flex-col justify-center ml-4 flex-1">
        <p className="text-gray-800 font-semibold text-sm">{brandName}</p>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{name}</p>
        <div className="flex justify-start text-green-600 font-medium text-sm mt-2">
          <span className="mr-4">Size: {selectedSize}</span>
          <span>Qty: 1</span>
        </div>
        <div className="flex justify-start items-center gap-3 text-sm mt-2">
          <span className="text-red-600 font-bold">₹ {price}</span>
          <span className="text-gray-500 line-through">₹ {oldPrice}</span>
          <span className="text-green-600 font-medium bg-green-100 px-2 py-1 rounded text-xs">
            {discountPercent}
          </span>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer text-xl font-bold"
        onClick={() => {
          removeDispatch(removeItem(itemData));
        }}
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
