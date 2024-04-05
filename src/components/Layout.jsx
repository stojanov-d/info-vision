import MainContentLayout from './MainContentLayout';
import Sidebar from './Sidebar';

function Layout() {
	return (
		<div className="grid grid-cols-5 gap-3">
			<Sidebar />
			<MainContentLayout />
		</div>
	);
}

export default Layout;
