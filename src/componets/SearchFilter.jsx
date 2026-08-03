// Search Filter

import { useEffect, useState } from "react";

// Given a list of fruits, search as you type.

// Concepts

// controlled input
// filter()

function SearchFilter(){
    //list of fruites 
    const [fruitList]=useState(["Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Watermelon"]);

//to store the current search text from input on every change 
    const[fruit,setFruit]=useState("");

const handleChange=(e)=>{
setFruit(e.target.value);

    }
const FilterdFruitList=fruitList.filter((item)=>item.toLowerCase().includes(fruit.toLowerCase()));
    
return(
<div>
    <h1>List of Fruites</h1>
    
    <input type="text" value={fruit} placeholder="start typing" onChange={handleChange}/>
    <ul>
{FilterdFruitList.map((item)=>(<li key={item}>{item}</li>))}


    </ul>


</div>







)
}
export default SearchFilter;