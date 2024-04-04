import GamesListItem from './GamesListItem';

function GamesList() {
	return (
		<div className="col-span-5">
			<ul className="bg-gray-500 p-3 m-7">
				<GamesListItem />
				<GamesListItem />
				<GamesListItem />
			</ul>
		</div>
	);
}

export default GamesList;
