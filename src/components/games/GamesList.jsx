import GamesListItem from './GamesListItem';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import teamNames from '../../teamNames';
const apiKey = import.meta.env.VITE_NBA_API_KEY;
let currentDate = new Date().toISOString().slice(0, 10);

function GamesList() {
	const [selectedDate, setSelectedDate] = useState(currentDate);
	const [games, setGames] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${selectedDate}?key=${apiKey}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setGames(data);
			});
	}, [selectedDate]);

	return (
		<div>
			<DatePicker
				defaultValue={currentDate}
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date.toISOString().slice(0, 10))}
			/>
			<ul className="content-center">
				{games.map((game) => {
					const homeTeam = teamNames[game.HomeTeam]?.simpleName;
					const awayTeam = teamNames[game.AwayTeam]?.simpleName;
					return (
						<GamesListItem
							key={game.GameID}
							homeTeam={homeTeam}
							awayTeam={awayTeam}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default GamesList;
