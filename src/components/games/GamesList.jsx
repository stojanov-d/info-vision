import GamesListItem from './GamesListItem';

function GamesList() {
	return (
		<ul className="content-center">
			<GamesListItem itemContent={'Game1'} />
			<GamesListItem itemContent={'Game2'} />
			<GamesListItem itemContent={'Game3'} />
			<GamesListItem itemContent={'Game4'} />
		</ul>
	);
}

export default GamesList;