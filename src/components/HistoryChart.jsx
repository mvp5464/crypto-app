import { useParams } from "react-router-dom";
import UseAxios from "../hooks/useAxios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = UseAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  console.log(response);

  if (!response) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className=" h-72 w-full mb-10" />
      </div>
    );
  }

  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  console.log(coinChartData);

  const options = { responsive: true };
  const data = {
    // labels: ["1", "2", "3"], // Labels is for x-axis
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")), //"MM DD" in numeric
    datasets: [
      {
        fill: true,
        label: id,
        // data: ["10", "20", "5"],
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
      {/* <div>HistoryChart</div> */}
    </div>
  );
};

export default HistoryChart;
