import { Link } from "react-router-dom";

const CoinTranding = ({ value }) => {
  //
  return (
    //why border is not visible here ---Below value is same as myCoin
    <Link to={`/coin/${value.id}`} style={{ textDecoration: "none" }}>
      <div className=" font-light mb-2 p-2 border-gray-800 border border-solid rounded hover:bg-gray-200">
        {/* {value.id} {value.name} */}
        <div className=" flex items-center gap-1">
          <span className=" font-semibold">{value.score + 1}.</span>
          <img className=" w-8" src={value.small} alt={value.id} />
          <p>{value.name}</p>
          <small className="text-xs">({value.symbol})</small>
        </div>
        {/* {value.name} */}
      </div>
    </Link>
  );
};

export default CoinTranding;
