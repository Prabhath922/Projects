import { useEffect, useState } from "react";

export default function darkModeToggle() {
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem('dark-mode')==('enabled')
    )
    useEffect(()=>{
    if(darkMode){
        document.documentElement.classList.add('dark-mode')
        localStorage.setItem('dark-mode','enabled')
    }else{
        document.documentElement.classList.remove('dark-mode')
        localStorage.setItem('dark-mode','disabled')
    }
    },[darkMode]);
    
    return (
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
    )
}
    