import GamesList from './components/GamesList';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="flex">
			<Sidebar />
			<GamesList />
		</div>
	);
}

export default App;
