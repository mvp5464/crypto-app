import { TrendingDown, TrendingUp } from "../assets/logo";
import { numberWithCommas } from "../utils";
import { Link } from "react-router-dom";

const CoinMarket = ({ myCoin }) => {
  console.log(myCoin);
  return (
    <Link to={`/coin/${myCoin.id}`} style={{ textDecoration: "none" }}>
      <div
        className=" grid grid-cols-3 md:grid-cols-4 font-light p-2 rounded no-underline border-gray-200 border-b-2 hover:bg-gray-200"
        style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
      >
        <div className=" flex items-center gap-1 w-full">
          <img className=" w-6" src={myCoin.image} alt={myCoin.name} />
          <p>{myCoin.name}</p>
          <span className=" text-sm">({myCoin.symbol})</span>
        </div>
        <span className=" w-full text-center">
          {numberWithCommas(myCoin.current_price)}
        </span>
        <span
          className={` flex gap-1 ${
            myCoin.price_change_percentage_24h < 0
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {myCoin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {myCoin.price_change_percentage_24h}
        </span>
        <div className=" hidden md:block">
          <p className=" font-semibold">Market cap</p>
          <span>{numberWithCommas(myCoin.market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default CoinMarket;

// myCoin = coin
// CoinMarket = Coin
