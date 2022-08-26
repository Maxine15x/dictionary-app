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
					<Dictionary defaultKeyword="book"/>
				</main>
				<footer>
					<small>Coded by Maxine Martinez</small>
				</footer>
			</div>
		</div>
	);
}
