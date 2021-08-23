import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js";

export default function Results (props){
    if (props.result){
      return (
        <div className="Results">
			<br />
			<h2>
				{props.result.word}
			</h2>
			<h6>
				{props.result.phonetics.map(function (phonetic, index){
					return (
						<div key={index}>
						<Phonetics phonetic={phonetic} />
						</div>
					)
				})}
			</h6>
			<br />
				{props.result.meanings.map(function(meaning, index){
					return(
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
        </div>
    )
	}else{
		return null
	}			
}