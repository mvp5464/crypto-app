import UseAxios from "../hooks/useAxios";
import CoinMarket from "./coinMarket";

const Market = () => {
  const { response } = UseAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  console.log(response);
  return (
    <section className=" mt-8">
      <h1 className="text-2xl mb-2">Market</h1>
      {response && response.map((i) => <CoinMarket myCoin={i} />)}
    </section>
  );
};

export default Market;
