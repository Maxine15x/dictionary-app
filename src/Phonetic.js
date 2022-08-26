import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
	return (
		<div className="Phonetic">
			{props.phonetic.audio && (
				<a href={props.phonetic.audio} rel="noreferrer" target="_blank">
					Audio
				</a>
			)}
			<span className="audio-text">{props.phonetic.text}</span>
		</div>
	);
}
