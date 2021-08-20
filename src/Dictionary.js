import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results.js"

export default function Dictionary (){
    let [keyword, setKeyword] = useState(null);
		let [definitions, setDefinitions] = useState(null);

    function handleResponse (response){
        setDefinitions(response.data[0])
    }
    
    function searchWord (event){
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
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
          <Results result={definitions} /> 
        </div>
    )
}