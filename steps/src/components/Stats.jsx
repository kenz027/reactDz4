export default function Stats({stats, onDeleteStat}) {
  return (
    <ul className="stats-list">
      <ul className="stats-list__titles">
        <li>Дата</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>
      {stats.map((stat, i) => (
        <li className="stats-list__stat" id={stat.id} key={`s${i}`}>
          <div className="stat__table">
                <p>{stat.date}</p>
                <p>{stat.km}</p>
                <button onClick={() => onDeleteStat(stat.id)}>
                  X
                </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
