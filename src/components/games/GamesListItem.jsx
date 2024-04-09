import PropTypes from 'prop-types';

function GamesListItem({ itemContent }) {
	return (
		<a>
			<li className="p-3 m-3 hover:bg-opacity-45  bg-green-400">
				{itemContent}
			</li>
		</a>
	);
}

GamesListItem.propTypes = {
	itemContent: PropTypes.node.isRequired,
};

export default GamesListItem;
