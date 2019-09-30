import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import uuid from "uuid/v1";

const Teams = () => {
	const { west, east } = useContext(TeamContext);
	return (
		<div className="container">
			{/* WEST Conference */}
			<div className="conference">
				<img src="img/west.png" alt="west" height="150" />

				<div className="team-wrapper">
					{west.map(team => (
						<div key={uuid()} className="team smooth">
							<img
								src={`img/${team.abbreviation}.png`}
								alt={`${team.abbreviation}`}
								height="100"
							/>
						</div>
					))}
				</div>
			</div>
			{/* Selected Team's Roster */}
			<div className="conference">
				<img src="img/west.png" alt="west" height="150" />

				<div className="team-wrapper">
					{west.map(team => (
						<div key={uuid()} className="team smooth">
							<img
								src={`img/${team.abbreviation}.png`}
								alt={`${team.abbreviation}`}
								height="100"
							/>
						</div>
					))}
				</div>
			</div>
			{/* EAST Conference */}
			<div className="conference">
				<img src="img/east.png" alt="east" height="150" />

				<div className="team-wrapper">
					{east.map(team => (
						<div key={uuid()} className="team smooth">
							<img
								src={`img/${team.abbreviation}.png`}
								alt={`${team.abbreviation}`}
								height="100"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Teams;
