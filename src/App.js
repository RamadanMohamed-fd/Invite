import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ScrollSection from "./components/scroll/ScrollSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Invite = lazy(() => import("./components/invitation/Invite"));
const Problem = lazy(() => import("./components/problem/Problem"));
const Solutions = lazy(() => import("./components/solutions/Solutions"));
const Process = lazy(() => import("./components/process/Process"));
const Supported = lazy(() => import("./components/supported/Supported"));
const Invesrtment = lazy(() => import("./components/investment/Invesrtment"));
const Logos = lazy(() => import("./components/logos/Logos"));
const Footer = lazy(() => import("./components/footer/Footer"));
const InvestNow = lazy(() => import("./components/investNow/InvestNow"));

function App() {
  const [linkValue, setLinkValue] = useState("");

  const handleLinkValue = (data) => {
    setLinkValue(data);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App over">
      <ScrollSection href={linkValue} />
      <Header linkValue={handleLinkValue} />
      <Suspense fallback={<div>Loading...</div>}>
        <Invite linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Problem linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Solutions linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Process linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Supported linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Invesrtment linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Logos linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <InvestNow linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer linkValue={handleLinkValue} />
      </Suspense>
    </div>
  );
}

export default App;
