const ColorDisplay = ({color})=>{

return(
<input type="text" placeholder="Empty Value" value={color} style={{backgroundColor:color}}></input>);
}

export default ColorDisplay;
