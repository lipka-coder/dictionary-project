import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary (){
    let [keyword, setKeyword] = useState(null);

    function searchWord (event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition.`)
    }

    function handleKyewordChange(event){
        setKeyword(event.target.value)
    }

    return (
        <div className="dictionary">
            <form onSubmit={searchWord}>
                <input type="search" 
                placeholder="Type a word..." 
                autoFocus={true}
                onChange={handleKyewordChange}/>
            </form>
        </div>
    )
}