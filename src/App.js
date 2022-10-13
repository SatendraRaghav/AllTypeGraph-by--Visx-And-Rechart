import React from "react";
import Recharts from "./Components/Recharts/Recharts";
import Visx from "./Components/VisxGraph/Visx";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Visx />
      <Recharts />
    </div>
  );
};
export default App;
