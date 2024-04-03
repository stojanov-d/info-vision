function PlayerCard() {
	return (
		<div className="border-black rounded bg-slate-400 w-1/6 h-full m-3 p-5">
			<img
				src="https://via.placeholder.com/150"
				alt="player"
				className="rounded-lg m-auto h-1/2 w-1/2"
			/>
			<h4 className="text-center">Team name</h4>
			<p className="text-center">Player Name</p>
		</div>
	);
}

export default PlayerCard;
