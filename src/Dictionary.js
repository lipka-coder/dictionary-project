import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results.js"
import Photos from "./Photos.js";

export default function Dictionary (){
    let [keyword, setKeyword] = useState(null);
		let [definitions, setDefinitions] = useState(null);
		let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse (response){
        setDefinitions(response.data[0])
    }

		function handlePexelResponse (response) {
			setPhotos(response.data.photos);
		}
    
    function searchWord (event){
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse)

				let pexelApiKey = "563492ad6f917000010000016225669aaae7482da574eb6b1d2d2c28";
				let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
				let headers = {Authorization: `Bearer ${pexelApiKey}`};
				axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
					<Photos photos={photos} />
        </div>
    )
}