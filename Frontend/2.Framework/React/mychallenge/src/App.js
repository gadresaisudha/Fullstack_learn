import './App.css';
import { useState } from 'react';
import ColorInput from './ColorInput';
import ColorDisplay from './ColorDisplay';
function App() {
  const [color,setColor] = useState('')
  return (
    <div className="App">
      <ColorInput color={color} setColor={setColor}/>
      <ColorDisplay color={color}/>
    </div>
  );
}

export default App;
