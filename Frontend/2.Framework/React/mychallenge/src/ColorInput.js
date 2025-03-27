const ColorInput = ({color,setColor})=>{

return(
    <form onSubmit={(e)=>e.preventDefault()}>
<input type="text" placeholder="Add color name" value={color} onChange={(e)=>setColor(e.target.value)}></input>
</form>
);
}

export default ColorInput;
