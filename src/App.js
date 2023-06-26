import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Invite from "./components/invitation/Invite";
import Problem from "./components/problem/Problem";
import Solutions from "./components/solutions/Solutions";
import Process from "./components/process/Process";
import Supported from "./components/supported/Supported";
import Invesrtment from "./components/investment/Invesrtment";
import Logos from "./components/logos/Logos";
import Footer from "./components/footer/Footer";
import InvestNow from "./components/investNow/InvestNow";
import ScrollSection from "./components/scroll/ScrollSection";
// import Scroll from "./components/scroll/SmoothScroll";
function App() {
  const [linkValue, setLinkValue] = useState("");

  const handleLinkValue = (data) => {
    setLinkValue(data);
  };

  return (
    <div className="App over">
      {/* <Scroll /> */}
      <ScrollSection href={linkValue} />
      <Header linkValue={handleLinkValue} />
      <Invite linkValue={handleLinkValue} />
      <Problem linkValue={handleLinkValue} />
      <Solutions linkValue={handleLinkValue} />
      <Process linkValue={handleLinkValue} />
      <Supported linkValue={handleLinkValue} />
      <Invesrtment linkValue={handleLinkValue} />
      <Logos linkValue={handleLinkValue} />
      <InvestNow linkValue={handleLinkValue} />
      <Footer linkValue={handleLinkValue} />
    </div>
  );
}

export default App;
