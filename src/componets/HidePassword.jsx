
// Task 3: Show/Hide Password

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Concepts:

// useState
// Conditional rendering

//installed the react icons 

function HidePassword(){

    const[visible,setVisible]=useState(false);
    const changevisibilty=()=>{
setVisible(!visible);

    }
    return(
        <div>
<label>Password</label>
<br/>
<div className="password-container">
    <input
        type={visible ? "text" : "password"}
        placeholder="Enter your password"
    />

    {visible ? (
        <FaEyeSlash className="eye-icon" onClick={changevisibilty} />
    ) : (
        <FaEye className="eye-icon" onClick={changevisibilty} />
    )}
</div>

{/* 👁️ (FaEye) → password is hidden, click to show it.
🙈 (FaEyeSlash) → password is visible, click to hide it. */}
<br/>

        </div>

       
       
       
    )
}
export default HidePassword;