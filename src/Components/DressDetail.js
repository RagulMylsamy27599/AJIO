import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DRESS_DETAIL_API_URL,
  SIMILAR_STYLE_API_URL,
} from "../../Utils/constant";
import Shimmer from "./Shimmer";
import { SIZES } from "../../Utils/constant";
import useFetchItemDetail from "../../Utils/useFetchItemDetails";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";
import SimilarStyles from "./SimilarStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Utils/cartSlice.js";

const DressDetail = () => {
  const { dressID } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishListed, setWishListed] = useState(false);
  const { dressInfo, isLoading } = useFetchItemDetail(
    dressID,
    DRESS_DETAIL_API_URL
  );
  const { onlineStatus } = useOnlineStatus();
  const dispatchCart = useDispatch();
  const data = useSelector((data) => data.cart.items);

  useEffect(() => {
    setSelectedSize(null);
    setSizeError(false);
    setAddedToCart(false);
    setWishListed(false);
  }, [dressID]);

  const cartPayload = dressInfo?.products ? { ...dressInfo?.products[0] } : {};
  cartPayload["selectedSize"] = selectedSize;

  if (!onlineStatus) return <Offline />;
  if (isLoading) {
    return <Shimmer />;
  }
  const { outfitPictureURL } = dressInfo?.products[0]?.fnlColorVariantData;

  const { name, brandTypeName, discountPercent, price, wasPriceData } =
    cartPayload;
  const addToCartOnClick = () => {
    if (cartPayload?.selectedSize) {
      setAddedToCart(true);
      dispatchCart(addItem(cartPayload));
    } else {
      setSizeError(true);
    }
  };

  const wishListOnClick = () => {
    setWishListed((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <div className="flex flex-row mt-8 max-w-6xl mx-auto px-4">
        <div className="border-solid border-[1px] p-5 border-gray-200 mr-10 rounded-lg shadow-md">
          <img
            alt={`${brandTypeName} - ${name}`}
            src={outfitPictureURL}
            className="w-96 h-96 object-cover rounded"
          />
        </div>
        <div className="flex flex-col justify-center max-w-md">
          <h2 className="text-2xl mb-3 text-gray-800 font-bold">
            {brandTypeName.toUpperCase()}
          </h2>
          <h4 className="mb-4 text-gray-600 text-lg">{name}</h4>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg">4.3 ⭐</span>
            <span className="text-gray-600">1.3K Ratings</span>
          </div>
          <div className="mb-4">
            <p className="text-orange-600 text-3xl font-bold">{`₹ ${price.value}`}</p>
            <p className="text-gray-600">
              MRP{" "}
              <span className="line-through">{`₹ ${wasPriceData.value}`}</span>
              <span className="text-green-600 ml-2 font-semibold">{`(${discountPercent})`}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-start mb-6">
            <p className="text-blue-600 font-semibold mb-3">Select Size</p>
            <ul className="flex gap-2">
              {SIZES.map((size, index) => {
                return (
                  <li
                    className={`${
                      size === selectedSize
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } rounded-full px-4 py-2 cursor-pointer transition-colors`}
                    key={size}
                    onClick={() => {
                      setSizeError(false);
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </li>
                );
              })}
            </ul>
          </div>
          {sizeError && (
            <p className="text-red-500 text-sm mb-2">Please select a size</p>
          )}
          <p className="text-blue-600 text-sm cursor-pointer hover:underline mb-4">
            Check Size Chart
          </p>
          {!addedToCart && (
            <button
              className={`${
                sizeError
                  ? "border-red-500 bg-red-50"
                  : "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
              } border-solid border-[1px] py-3 px-6 rounded-lg cursor-pointer flex justify-center items-center font-semibold transition-colors mb-3`}
              onClick={addToCartOnClick}
            >
              <img
                alt="Add to Cart"
                src="https://images.icon-icons.com/1993/PNG/512/bag_buy_cart_market_shop_shopping_tote_icon_123191.png"
                className="w-5 mr-2"
              ></img>
              ADD TO CART
            </button>
          )}
          {addedToCart && (
            <Link
              className="border-solid border-[1px] border-green-600 bg-green-600 text-white py-3 px-6 text-center rounded-lg cursor-pointer flex justify-center items-center font-semibold hover:bg-green-700 transition-colors mb-3"
              to={"/CartContent"}
            >
              <button className="flex justify-center items-center font-semibold cursor-pointer">
                MOVE TO CART
                <img
                  alt="Move to Cart"
                  src="https://images.icon-icons.com/1993/PNG/512/arrow_arrows_back_direction_left_navigation_right_icon_123236.png"
                  className="w-5 ml-2"
                ></img>
              </button>
            </Link>
          )}

          <button
            className={`${
              wishListed
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-600 hover:bg-gray-700"
            } py-3 px-6 rounded-lg text-white cursor-pointer flex justify-center items-center font-semibold transition-colors`}
            onClick={wishListOnClick}
          >
            <img
              alt="Wishlist"
              src="https://images.icon-icons.com/37/PNG/32/like_favorite_heart_3524.png"
              className="w-5 mr-2 invert brightness-10"
            ></img>
            {wishListed ? "WISHLISTED" : "ADD TO WISHLIST"}
          </button>
        </div>
      </div>
      <div className="flex w-[70vw] flex-row justify-center items-center mt-10">
        <div className="border-gray-400 border-t-[1px] w-1/3"></div>
        <p className="px-5 text-[#2F4254]">Similar Styles</p>
        <div className="border-gray-400 border-t-[1px] w-1/3"></div>
      </div>
      <SimilarStyles dressCode={dressID} APIURL={SIMILAR_STYLE_API_URL} />
    </div>
  );
};

export default DressDetail;
