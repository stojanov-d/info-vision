import GamesList from './games-list/GamesList';
import Sidebar from './sidebar/Sidebar';

function Layout() {
	return (
		<div className="grid grid-cols-6">
			<Sidebar />
			<GamesList />
		</div>
	);
}

export default Layout;
