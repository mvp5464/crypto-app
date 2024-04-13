import UseAxios from "../hooks/useAxios";
import CoinTranding from "./coinTranding";

const Trending = () => {
  const { response } = UseAxios("search/trending"); // can put "/" before search
  console.log(response);
  //   console.log(response.coins[1].item.id);

  return (
    <div className="mt-8">
      <h1 className=" text-2xl mb-2">Trending</h1>
      {response && // How this response && works (&& returns first falsy value)=>[if we have a response then do map ??]
        response.coins.map((i) => {
          return <CoinTranding key={i.item.coin_id} value={i.item} />;
        })}
    </div>
  );
};

export default Trending;