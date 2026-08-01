import { useState } from "react";

function TempConverter(){
    
    const [degree,setDegree]=useState("");
    const handleChange=(e)=>{
setDegree(e.target.value);
    };
    return (
<div>
    <label>Enter your temperature in degree celsius to convert in farenheight</label>
    <br/>
   <input value={degree} type="number" placeholder="Enter your temp" onChange={handleChange}/>
   <br/>
   <p>your farenheit is {" "}{(degree*9)/5+32}</p>
    
</div>



    )
}
export default TempConverter;