import React from "react";
import { FaYoutube, FaChartBar, FaUsers } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

const Links = () => {
	return (
		<div className="links">
			<a
				href="https://www.youtube.com/watch?v=M38X6RhH6QE&list=PL5j8RirTTnK6SwgRfls1MbJqCFgmxRu-3"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaYoutube className="icon smooth" />
			</a>
			<a
				href="https://www.nba.com/standings"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GiTrophy className="icon smooth" />
			</a>
			<a
				href="https://stats.nba.com/teams/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaChartBar className="icon smooth" />
			</a>
			<a
				href="https://stats.nba.com/players/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaUsers className="icon smooth" />
			</a>
		</div>
	);
};

export default Links;
