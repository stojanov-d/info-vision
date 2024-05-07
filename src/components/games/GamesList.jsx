import GamesListItem from './GamesListItem';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';

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
				onChange={(date) => setSelectedDate(date)}
			/>
			<ul className="content-center">
				<GamesListItem itemContent={'Game1'} />
				<GamesListItem itemContent={'Game2'} />
				<GamesListItem itemContent={'Game3'} />
				<GamesListItem itemContent={'Game4'} />
			</ul>
		</div>
	);
}

export default GamesList;
