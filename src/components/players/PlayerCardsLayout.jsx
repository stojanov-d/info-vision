import PlayerCard from './PlayerCard';

function PlayerCardsLayout() {
	return (
		<div className="grid grid-cols-4 gap-3">
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
			<PlayerCard />
		</div>
	);
}

export default PlayerCardsLayout;
