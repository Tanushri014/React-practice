// 4.	Character Counter 
// Input field with:
// •	Current character count 
// •	Maximum limit (100) 
// Concepts: controlled components




import {useState } from "react";

function CharacterCounter(){


  
    const [text, setText] = useState("");
    const maxCount=100;
    const handleChange=(e)=>{
        if(e.target.value.length<=100){
       setText(e.target.value);
        }
    };
       
    return(
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <p>Cuurent character count :{text.length}</p>
           <p>
        {text.length === maxCount
          ? "Limit reached!"
          : `You can type ${maxCount - text.length} more characters.`}
      </p>
        </div>
    )
}
export default CharacterCounter;