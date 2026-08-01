// Task 4: Theme Toggle

import { useState } from "react";

// Switch between:

// Light Mode
// Dark Mode

// Concepts:

// State
// Dynamic CSS

function Theme(){
    const[theme,setTheme]=useState("light");
    const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

};
    return(
        <div className={theme}>

            <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}
export default Theme;