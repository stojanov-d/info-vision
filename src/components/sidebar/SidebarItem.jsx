import PropTypes from 'prop-types';

function SidebarItem({ itemName }) {
	return (
		<a href="">
			<li className="p-3 m-3 rounded-md bg-slate-400">{itemName}</li>
		</a>
	);
}

SidebarItem.propTypes = {
	itemName: PropTypes.string.isRequired,
};

export default SidebarItem;
