import SidebarItem from './SidebarItem';

function Sidebar() {
	return (
		<div className="col-span-1 min-h-64 bg-cyan-500">
			<ul>
				<SidebarItem itemContent={'Item1'} />
				<SidebarItem itemContent={'Item2'} />
				<SidebarItem itemContent={'Item3'} />
				<SidebarItem itemContent={'Item4'} />
			</ul>
		</div>
	);
}

export default Sidebar;
