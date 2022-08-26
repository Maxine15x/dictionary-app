import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		// documentation: https://api.pexels.com/v1/
		let pexelsApiKey =
			"563492ad6f917000010000011e62686358a04774ae1f22f7ddfc92a2";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
						/>
					</form>
					<div className="hint">
						Suggested words: craft, yoga, energy, mobile...etc.
					</div>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
