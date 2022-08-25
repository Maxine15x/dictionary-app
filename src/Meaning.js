import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<div className="definition">
							<strong>Defintion:</strong>
							{definition.definition}
						</div>
						<br />
						<div className="example">
							<strong>
								<em>Example:</em>
							</strong>
							{definition.example}
						</div>
						<Synonyms synonyms={definition.synonyms} />
					</div>
				);
			})}
		</div>
	);
}
