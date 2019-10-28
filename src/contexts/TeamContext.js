import React, { createContext, useState } from "react";

export const TeamContext = createContext();

const data = [
	{
		id: 1,
		conference: "east",
		abbreviation: "hawks"
	},
	{
		id: 2,
		conference: "east",
		abbreviation: "celtics"
	},
	{
		id: 3,
		conference: "east",
		abbreviation: "nets"
	},
	{
		id: 4,
		conference: "east",
		abbreviation: "hornets"
	},
	{
		id: 5,
		conference: "east",
		abbreviation: "bulls"
	},
	{
		id: 6,
		conference: "east",
		abbreviation: "cavaliers"
	},
	{
		id: 7,
		conference: "west",
		abbreviation: "mavericks"
	},
	{
		id: 8,
		conference: "west",
		abbreviation: "nuggets"
	},
	{
		id: 9,
		conference: "east",
		abbreviation: "pistons"
	},
	{
		id: 10,
		conference: "west",
		abbreviation: "warriors"
	},
	{
		id: 11,
		conference: "west",
		abbreviation: "rockets"
	},
	{
		id: 12,
		conference: "east",
		abbreviation: "pacers"
	},
	{
		id: 13,
		conference: "west",
		abbreviation: "clippers"
	},
	{
		id: 14,
		conference: "west",
		abbreviation: "lakers"
	},
	{
		id: 15,
		conference: "west",
		abbreviation: "grizzlies"
	},
	{
		id: 16,
		conference: "east",
		abbreviation: "heat"
	},
	{
		id: 17,
		conference: "east",
		abbreviation: "bucks"
	},
	{
		id: 18,
		conference: "west",
		abbreviation: "timberwolves"
	},
	{
		id: 19,
		conference: "west",
		abbreviation: "pelicans"
	},
	{
		id: 20,
		conference: "east",
		abbreviation: "knicks"
	},
	{
		id: 21,
		conference: "west",
		abbreviation: "thunder"
	},
	{
		id: 22,
		conference: "east",
		abbreviation: "magic"
	},
	{
		id: 23,
		conference: "east",
		abbreviation: "sixers"
	},
	{
		id: 24,
		conference: "west",
		abbreviation: "suns"
	},
	{
		id: 25,
		conference: "west",
		abbreviation: "blazers"
	},
	{
		id: 26,
		conference: "west",
		abbreviation: "kings"
	},
	{
		id: 27,
		conference: "west",
		abbreviation: "spurs"
	},
	{
		id: 28,
		conference: "east",
		abbreviation: "raptors"
	},
	{
		id: 29,
		conference: "west",
		abbreviation: "jazz"
	},
	{
		id: 30,
		conference: "east",
		abbreviation: "wizzards"
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
