import PropTypes from 'prop-types';

function SidebarItem({ itemContent }) {
	return (
		<a>
			<li className="p-3 m-3 hover:bg-opacity-45  bg-teal-400">
				{itemContent}
			</li>
		</a>
	);
}

SidebarItem.propTypes = {
	itemContent: PropTypes.node.isRequired,
};

export default SidebarItem;
