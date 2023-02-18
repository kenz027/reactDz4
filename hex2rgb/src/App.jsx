import { useState } from "react"

function App() {
  const [hexValue, setHexValue] = useState('#');
  const [rgbValue, setRgbValue] = useState('');
  const HEX2RGB = (hex) => {
    setHexValue(hex)
    let values = hex.split(''),
        r,
        g,
        b;
    if (hex){
      if (hex.length === 7){
        if (hex.startsWith('#')){
          setRgbValue('');
          r = parseInt(values[1].toString() + values[2].toString(), 16);
          g = parseInt(values[3].toString() + values[4].toString(), 16);
          b = parseInt(values[5].toString() + values[6].toString(), 16);
        }
        if (isFinite(r) && isFinite(g) && isFinite(b)){
          const resultrgb = `rgb(${[r, g, b]})`;
          setRgbValue(resultrgb);
        } else{
          setRgbValue('red');
        }
      }
    }
  }

  return (
    <div className="App" style={{background:rgbValue}}>
      <input type='text' className="color__enter" maxLength="7" value={hexValue} onChange={(e)=>HEX2RGB(e.target.value)} />
      <p className="color__result">{rgbValue === 'red' ? 'Ошибка' : rgbValue}</p>
    </div>
  )
    
}

export default App
