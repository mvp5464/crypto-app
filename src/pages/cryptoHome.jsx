import Market from "../components/market";
import Trending from "../components/trending";

const CryptoHome = () => {
  return (
    <div className=" max-w-5xl mx-auto px-2 w-full">
      <Trending />
      <Market />
    </div>
  );
};

export default CryptoHome;
