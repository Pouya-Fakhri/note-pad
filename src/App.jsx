import { useState } from "react";
import Header from "./Header";
import Inputs from "./Inputs";

export default function App() {
  const [nots, setNots] = useState([]);
  console.log(nots);
  return (
    <main className=" p-3 h-screen overflow-hidden flex flex-col gap-2  justify-around">
      <Header />
      <Inputs setNots={setNots} />
    </main>
  );
}
