import { Stat } from "./Stat";

export default function Stats({stats, onDeleteStat}) {
  return (
    <ul className="stats-list">
      <ul className="stats-list__titles">
        <li>Дата</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>
      {stats.map((stat, i) => (
        <Stat stat={stat} key={`s${i}`} onDeleteStat={props.onDeleteStat} />
      ))}
    </ul>
  );
}
