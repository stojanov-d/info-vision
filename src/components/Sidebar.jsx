import { useState } from 'react';

function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSideBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isOpen ? (
				<div className="bg-green-300 h-screen w-1/6">
					<ul>
						{/* Create dark mode component here */}
						<li className="p-4">
							<button onClick={toggleSideBar}>Toggle sidebar</button>
						</li>
						<li className="p-4">Item1</li>
						<li className="p-4">Item2</li>
						<li className="p-4">Item3</li>
						<li className="p-4">Item4</li>
					</ul>
				</div>
			) : (
				<button onClick={toggleSideBar} className="p-4 w-1/6">
					Toggle sidebar
				</button>
			)}
		</>
	);
}

export default Sidebar;
