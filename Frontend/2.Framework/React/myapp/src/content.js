
import ItemList from './ItemList';
const Content= ({items,handleCheck, handleDelete})=>{
   // const [name,setName] = useState('Dave');
    //const [count,setCount] = useState(0)

   /* const handleNameChange = ()=>{
        const names = ['bob','Kevin','Dave'];
        const int = Math.floor(Math.random()*3);
        //return names[int];
        setName(names[int]);
      }
    const handleClick = ()=>{
        setCount(count+1)
        setCount(count+1)
        console.log(count)
        console.log('You clicked it')
    }
    const handleClick2 = (name)=>{
        console.log(`${name} clicked it`)
        console.log(count)
    }
    const handleClick3 = (e)=>{
        console.log(e.target.innerText)
    }*/

    return(
       <>
            {items.length?(
            <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}></ItemList>
            ):(
                <p style={{marginTop:'2rem'}}>Your list is empty.</p>
            )}
            {/*
         <p>
         Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click it</button>
        <button onClick={handleClick2()}>Click it</button>
                */}


        {/* <main>
            <p onDoubleClick = {handleClick}>
         Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={()=>handleClick2('Dave')}>Click it</button>
        <button onClick={(e)=>handleClick3(e)}>Click it</button>
        </main> */}
      </>


    )
}
export default Content;
