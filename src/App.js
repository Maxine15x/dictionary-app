import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src={logo} className="App-logo img-fluid" alt="logo" />
				</header>
				<main>
					<Dictionary defaultKeyword="book" />
				</main>
				<footer>
					<small>
						This project was coded by Maxine Martinez, and is{" "}
						<a
							href="https://github.com/Maxine15x/dictionary-app"
							target="_blank"
							rel="noreferrer"
						>
							Open-sourced on GitHub
						</a>{" "}
						and{" "}
						<a
							href="https://dictionary-project-app.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							hosted on Netlify
						</a>
					</small>
				</footer>
			</div>
		</div>
	);
}
