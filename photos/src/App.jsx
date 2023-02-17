import { useRef } from 'react';
import { useState } from 'react'
import './css/App.css'

function App() {
  const [dataUrl, setDataUrl] = useState([]);
  const inputfileRef = useRef();
  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }
  
  const handleSelect = async (evt) => {
      const files = [...evt.target.files];
      const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
      setDataUrl((prev)=>[...prev, urls])
      // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
  }
  const delImgHandler = (url) => {
    setDataUrl(dataUrl.filter(url1=> url1 !== url));
  }

  return (
    <div className="App">
        <input id="fileInput" type="file" style={{'display':'none'}} onChange={handleSelect} ref={inputfileRef} accept="image/*"/>
        <input type="button" value="Click to select" className='select-file-btn' onClick={()=>inputfileRef.current.click()} />
        <ul>
          {dataUrl.map((url, i)=>(
            <li key={`img${i}`}>
              <img src={url} />
              <button onClick={()=>delImgHandler(url)}>X</button>
            </li>))}
        </ul>
    </div>
  )
}

export default App
