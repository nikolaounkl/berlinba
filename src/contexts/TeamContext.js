import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TeamContext = createContext();

const TeamContextProvider = props => {
	const [teams, setTeams] = useState([]);
	const [east, setEast] = useState([]);
	const [west, setWest] = useState([]);
	const [loading, setLoading] = useState(false);

	// Fetch all teams from local teams.json file
	const fetchTeams = async () => {
		setLoading(true);
		const res = await axios.get("../teams.json");
		setTeams(res.data);
		setEast(res.data.filter(team => team.conference === "east"));
		setWest(res.data.filter(team => team.conference === "west"));
		setLoading(false);
	};

	// Fetch teams when component is mounted or updated
	useEffect(() => {
		fetchTeams();
	}, []);

	return (
		<TeamContext.Provider value={{ teams, west, east, loading }}>
			{props.children}
		</TeamContext.Provider>
	);
};

export default TeamContextProvider;
