import SidebarItems from './SidebarItems';

function Sidebar() {
	return (
		<div className="col-span-1 bg-cyan-500 ">
			<ul className="sticky top-3">
				<SidebarItems />
			</ul>
		</div>
	);
}

export default Sidebar;
