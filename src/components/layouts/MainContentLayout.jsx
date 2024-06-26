import GamesList from '../games/GamesList';
import PlayerCardsLayout from '../players/PlayerCardsLayout';

function MainContentLayout() {
	return (
		<div className="grid grid-rows-1 col-span-4">
			<GamesList />
			<PlayerCardsLayout />
		</div>
	);
}

export default MainContentLayout;
