import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js";
import './Results.css';

export default function Results (props){
    if (props.result){
      return (
        <div className="Results">
			<section>
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
			</section>		
				{props.result.meanings.map(function(meaning, index){
					return(
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
        </div>
    )
	}else{
		return null
	}			
}