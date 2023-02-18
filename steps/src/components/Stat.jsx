export function Stat(props){
    const {stat} = props;
    return (
        <li className="stats-list__stat" id={stat.id}>
          <div className="stat__table">
                <p>{stat.date}</p>
                <p>{stat.km}</p>
                <button onClick={() => props.onDeleteStat(stat.id)}>
                  X
                </button>
          </div>
        </li>
    )
}