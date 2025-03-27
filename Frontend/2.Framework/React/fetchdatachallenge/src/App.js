import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Content from './content';
function App() {
  const [data,setData] = useState([]);
  const [reqType,setReqType] = useState('users');
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  useEffect(()=>{
    const fetchItems = async()=>{
      const response = await fetch(`${API_URL}${reqType}`)
      const listItems = await response.json();
      console.log(listItems)
      setData(listItems);
    }
    fetchItems();
  },[reqType])


  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}></Form>
      <Content data={data}/>
    </div>
  );
}

export default App;
