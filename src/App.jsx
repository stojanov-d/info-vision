import GamesList from './components/GamesList';
import PlayerCard from './components/PlayerCard';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-5/6">
				<GamesList />
				<div className="flex justify-evenly">
					<PlayerCard />
					<PlayerCard />
					<PlayerCard />
					<PlayerCard />
				</div>
			</div>
		</div>
	);
}

export default App;
