import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

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

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<form onSubmit={handleSubmit}>
						<input
							className="form-control"
							type="search"
							placeholder="Search dictionary word..."
							autoFocus={true}
							onChange={handleKeyword}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className="hint">
						Suggested words: craft, yoga, world, energy...
					</div>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
