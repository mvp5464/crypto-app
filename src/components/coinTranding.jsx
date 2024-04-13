const CoinTranding = ({ value }) => {
  //
  return (
    //why border is not visible here
    <div className=" font-light mb-2 p-2 border-gray-800 border-8 rounded hover:bg-gray-200">
      {/* {value.id} {value.name} */}
      <div className=" flex items-center gap-1">
        <span className=" font-semibold">{value.score + 1}.</span>
        <img className=" w-8" src={value.small} alt={value.id} />
        <p>{value.name}</p>
        <small className="text-xs">({value.symbol})</small>
      </div>
      {/* {value.name} */}
    </div>
  );
};

export default CoinTranding;
