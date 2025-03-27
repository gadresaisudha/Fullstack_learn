import Content from './content';
import { useState, useEffect } from 'react';
import Header from './Header';
import AddItem from './AddItem';
import Footer from './Footer';
import SearchItem from './SearchItem';
import apirequest from './apiRequest';


function App() {
  /*const handleNameChange = ()=>{
    const names = ['bob','Kevin','Dave'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

    const [items,setItems] = useState([
      {   id: 1,
          checked:false,
          item: "Item 1"
      },
      {   id: 2,
          checked:false,
          item: "Item 2"
      },
      {   id: 3,
          checked:false,
          item: "Item 3"
      }
  ]);
*/
const API_URL = 'http://localhost:3500/items'
const [items,setItems] = useState([]);
const [newItem,setNewItem] = useState('')
 const [search,setSearch] = useState('')
 const [fetchError,setFetchError] = useState(null)
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data');
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  setTimeout(() => fetchItems(), 2000);

}, [])

 /*useEffect(()=>{
  localStorage.setItem('shoppinglist',JSON.stringify(items));
 },[items])*/

/*
 const setAndSaveItems = (newItems)=>{
    setItems(newItem s);
    localStorage.setItem('shoppinglist',JSON.stringify(newItems));
  }*/
  const addItem = async(item)=>{
    const id = items.length? items[items.length-1].id + 1:1;
    const myNewItem = {id,checked:false,item};
    const listItems = [...items,myNewItem];
    setItems(listItems);

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apirequest(API_URL,postOptions);
    if (result){
      setFetchError(result)
    }
  }
    const handleCheck = async(id)=>{
        console.log(`key ${id}`)
        const listItems  = items.map((item)=>item.id==id?{...item,checked: !item.checked}:item);
        setItems(listItems);

        const updateItems = listItems.filter((item)=>item.id===id);
        const updateOptions = {
          method : 'PATCH',
          headers : {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({checked:updateItems[0].checked})
        }
        const reqURL = `${API_URL}/${id}`
        const result = await apirequest(reqURL,updateOptions)
        if(result){ setFetchError(result)}
    }

    const handleDelete = async(id)=>{
        console.log(`${id}`);
        const listItems = items.filter((item)=>item.id!==id);
        setItems(listItems)
        const deleteOptions = {
          method : 'DELETE'
        }
        const reqURL = `${API_URL}/${id}`
        const result = await apirequest(reqURL,deleteOptions)
        if(result){ setFetchError(result)}
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem);
        setNewItem('');
    }
  return (
    <div className="App">
    { /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello {handleNameChange()}!
        </p>
      </header>*/}
      <Header title="Groceries"/>
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <AddItem newItem = {newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}></AddItem>
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer listlength={items.length}/>
    </div>
  );
}

export default App;
