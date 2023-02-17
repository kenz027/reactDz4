import { useRef } from "react"

export default function FormStats(props){
    const dateRef = useRef();
    const kmRef = useRef();

    const formHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const date = dateRef.current.value;
        const km = Number(kmRef.current.value);
        const id = self.crypto.randomUUID();
        if (km > 0 && isFinite(km)){
            props.onAddStat({date, km, id})
        } else{
            form.reset();
            alert('Введите корректное число')
        }
    }

    return (
        <form onSubmit={formHandler} className="form-stats">
            <label className="form-stats__label">
                Дата(ДД.ММ.ГГ)
                <input type='date' name='date' ref={dateRef} />
            </label>
            <label className="form-stats__label">
                Пройдено км
                <input type='text' name='km' ref={kmRef}/>
            </label>
            <button type='submit' className="form-stats__subbtn">ОК</button>
        </form>
    )
}