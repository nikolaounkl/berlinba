import React from "react";
import "./App.css";
import TeamContextProvider from "./contexts/TeamContext";
import Teams from "./components/Teams";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: white;
		min-height: 100vh;
		background: url("img/nba_bg.jpg") center center;
		background-attachment: fixed;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

function App() {
	return (
		<div className="App">
			<TeamContextProvider>
				<GlobalStyle />
				<Teams />
			</TeamContextProvider>
		</div>
	);
}

export default App;
