import { useState } from "react";
import { PROFILE_ICON } from "../../Utils/constant";
const Profile = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative w-6 h-6 cursor-pointer"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <img src={PROFILE_ICON} alt="Profile" className="w-full h-full" />
      {isHover && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div className="flex flex-col items-center">
            <div className="w-[50px] h-[3px] bg-amber-600 mb-2 rounded"></div>
            <div className="flex flex-col bg-white shadow-lg border border-gray-200 w-max px-4 py-3 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Hello, Ragul</p>
              <p className="text-xs text-gray-500">7092143437</p>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <p className="text-sm text-gray-700 hover:text-red-600 cursor-pointer transition-colors">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
