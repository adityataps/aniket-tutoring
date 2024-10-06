import "./App.css";
import Home from "./home/Home.tsx";
import { Colors } from "./utilities/colors.constants.ts";

function App() {
  return (
    <div
      style={{
        // marginTop: 0,
        height: "100vh",
        width: "100%",

        backgroundColor: Colors.webpageBg,
      }}
    >
      <Home></Home>
    </div>
  );
}

export default App;
