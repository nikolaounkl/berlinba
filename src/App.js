import React from "react";
import "./App.css";
import TeamContextProvider from "./contexts/TeamContext";
import Teams from "./components/Teams";

function App() {
	return (
		<div className="App">
			<TeamContextProvider>
				<Teams />
			</TeamContextProvider>
		</div>
	);
}

export default App;
