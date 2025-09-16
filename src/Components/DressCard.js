import { Link } from "react-router-dom";
import { memo } from "react";

const DressCards = memo(({ data, gender }) => {
  const { fnlColorVariantData, price, wasPriceData, discountPercent, name } =
    data;
  return (
    <Link
      to={`/${gender}/${fnlColorVariantData?.colorGroup}`}
      className="group"
    >
      <div className="flex flex-col w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            alt={`${fnlColorVariantData?.brandName} - ${name}`}
            src={fnlColorVariantData?.outfitPictureURL}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 pb-2 text-sm">
            {fnlColorVariantData?.brandName}
          </h3>
          <p className="text-gray-600 pb-2 text-sm line-clamp-2">{name}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {price?.formattedValue}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {wasPriceData?.formattedValue}
            </span>
            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
              {discountPercent}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
});

export const BestSellerDressCard = (DressCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Best Seller
          </span>
        </div>
        <DressCard {...props} />
      </div>
    );
  };
};

DressCards.displayName = "DressCards";
export default DressCards;
