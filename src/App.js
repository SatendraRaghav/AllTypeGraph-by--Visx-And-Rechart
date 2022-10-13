import BarGraph from "./Components/BarGraph/BarGraph";
import LineGraph from "./Components/LineGraph/LineGraph";
import DrawMixGraph from "./Components/MixGraph.js/DrawMixGraph";
import MixGraph from "./Components/MixGraph.js/MixGraph";
import PieGraph from "./Components/PieGraph/PieGraph";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <PieGraph />
      <BarGraph />
      <LineGraph />
      <MixGraph />
    </div>
  );
};
export default App;
