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
        <div className="Dictionary">
          <section>
						<h1>
							Dictionary
						</h1>
						<h5>
							What word are you curious about?
						</h5>
            <form onSubmit={searchWord}>
                <input type="search" 
                placeholder="Type a word..." 
                autoFocus={true}
                onChange={handleKyewordChange}/>
            </form>
					</section>
          <Results result={definitions} /> 
        </div>
    )
}