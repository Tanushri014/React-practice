// Task 2: Counter App

// Features:

// Increment
// Decrement
// Reset
// Don't allow negative numbers

// Concepts: useState




import { useState } from "react";

function Counter(){

    const[count,setcount]=useState(0);
const increment=()=>{
    console.log(count);
    setcount(count+1);
}
const decrement=()=>{
    
    if(count>1){
setcount(count-1);
    }
    else{
console.log("cannot divide by zero");
    }
    
}
const reset=()=>{
    console.log("setting back to zzer0000");
    setcount(0);
}
    return(
        <div>
            <h2>Welcome to the counter app </h2>
            <label>Counter</label>
            <br/>
            <input type="text" value={count} readOnly/>
            <br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;