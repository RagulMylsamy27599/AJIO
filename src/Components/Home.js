import Carousal from "./Carousal";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";

import {
  CAROUSAL_IMAGES_CLOTH_OFFERS,
  CAROUSAL_IMAGES_CARD_OFFERS,
  ADD_ONE,
  ADD_TWO,
} from "../../Utils/constant";

const Home = () => {
  const { onlineStatus } = useOnlineStatus();
  if (!onlineStatus) return <Offline />;
  return (
    <div className="pt-20">
      <Carousal carousalImages={CAROUSAL_IMAGES_CLOTH_OFFERS} />
      <Carousal carousalImages={CAROUSAL_IMAGES_CARD_OFFERS} />
      <div className="flex flex-col mb-10 cursor-pointer max-w-6xl mx-auto">
        <img alt="Special Offer" src={ADD_ONE} className="w-full"></img>
        <img alt="Free Delivery Offer" src={ADD_TWO} className="w-full"></img>
      </div>
    </div>
  );
};

export default Home;
