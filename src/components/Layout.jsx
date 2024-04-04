import Sidebar from './sidebar/Sidebar';

function Layout() {
	return (
		<div className="grid grid-cols-6 gap-4">
			<Sidebar />
		</div>
	);
}

export default Layout;
