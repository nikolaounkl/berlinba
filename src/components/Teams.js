import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import uuid from "uuid/v1";

const Teams = () => {
	const { teams } = useContext(TeamContext);
	return (
		<div>
			<div className="container">
				<img src="img/west.png" alt="west" height="150" />
				<img src="img/east.png" alt="east" height="150" />
			</div>

			<div className="teams">
				{teams.map(team => (
					<div key={uuid()} className="team smooth">
						<a
							href={`https://www.nba.com/teams/${team.abbreviation}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={`img/${team.abbreviation}.png`}
								alt={`${team.abbreviation}`}
								height="100"
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Teams;
