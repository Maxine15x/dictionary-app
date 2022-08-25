import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search() {
		// documentation: https://dictionaryapi.dev/e
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="search"
					placeholder="Search dictionary word..."
					autoFocus={true}
					onChange={handleKeyword}
				/>
			</form>
			<Results results={results} />
		</div>
	);
}
