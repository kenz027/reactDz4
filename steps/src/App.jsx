import { useState } from "react";
import FormStats from "./components/FormStats";
import Stats from "./components/Stats";

function App() {
  const [stats, setStats] = useState([]);

  const addStat = (stat) => {
    const obj = stats.find((s) => s.date === stat.date);
    const index = stats.indexOf(obj);
    if (stats[index]) {
      stats[index].km += stat.km;
      setStats((prev) => [...prev]);
      console.log(stats);
      return;
    }
    setStats((prev) => [...prev, stat]);
  };
  const deleteStat = (id) => {
    setStats(stats.filter((stat) => stat.id !== id));
  };
  return (
    <>
      <FormStats onAddStat={addStat} />
      <Stats stats={stats} onDeleteStat={deleteStat} />
    </>
  );
}

export default App;
