import React, { createContext, useState } from "react";

export const TeamContext = createContext();

const data = [
	{
		id: 1,
		conference: "east",
		abbreviation: "ATL"
	},
	{
		id: 2,
		conference: "east",
		abbreviation: "BOS"
	},
	{
		id: 3,
		conference: "east",
		abbreviation: "BKN"
	},
	{
		id: 4,
		conference: "east",
		abbreviation: "CHA"
	},
	{
		id: 5,
		conference: "east",
		abbreviation: "CHI"
	},
	{
		id: 6,
		conference: "east",
		abbreviation: "CLE"
	},
	{
		id: 7,
		conference: "west",
		abbreviation: "DAL"
	},
	{
		id: 8,
		conference: "west",
		abbreviation: "DEN"
	},
	{
		id: 9,
		conference: "east",
		abbreviation: "DET"
	},
	{
		id: 10,
		conference: "west",
		abbreviation: "GSW"
	},
	{
		id: 11,
		conference: "west",
		abbreviation: "HOU"
	},
	{
		id: 12,
		conference: "east",
		abbreviation: "IND"
	},
	{
		id: 13,
		conference: "west",
		abbreviation: "LAC"
	},
	{
		id: 14,
		conference: "west",
		abbreviation: "LAL"
	},
	{
		id: 15,
		conference: "west",
		abbreviation: "MEM"
	},
	{
		id: 16,
		conference: "east",
		abbreviation: "MIA"
	},
	{
		id: 17,
		conference: "east",
		abbreviation: "MIL"
	},
	{
		id: 18,
		conference: "west",
		abbreviation: "MIN"
	},
	{
		id: 19,
		conference: "west",
		abbreviation: "NOP"
	},
	{
		id: 20,
		conference: "east",
		abbreviation: "NYK"
	},
	{
		id: 21,
		conference: "west",
		abbreviation: "OKC"
	},
	{
		id: 22,
		conference: "east",
		abbreviation: "ORL"
	},
	{
		id: 23,
		conference: "east",
		abbreviation: "PHI"
	},
	{
		id: 24,
		conference: "west",
		abbreviation: "PHX"
	},
	{
		id: 25,
		conference: "west",
		abbreviation: "POR"
	},
	{
		id: 26,
		conference: "west",
		abbreviation: "SAC"
	},
	{
		id: 27,
		conference: "west",
		abbreviation: "SAS"
	},
	{
		id: 28,
		conference: "east",
		abbreviation: "TOR"
	},
	{
		id: 29,
		conference: "west",
		abbreviation: "UTA"
	},
	{
		id: 30,
		conference: "east",
		abbreviation: "WAS"
	}
];

const TeamContextProvider = props => {
	const [teams] = useState(data);
	const [east] = useState(teams.filter(team => team.conference === "east"));
	const [west] = useState(teams.filter(team => team.conference === "west"));

	console.log(east);

	return (
		<TeamContext.Provider value={{ teams, west, east }}>
			{props.children}
		</TeamContext.Provider>
	);
};

export default TeamContextProvider;
