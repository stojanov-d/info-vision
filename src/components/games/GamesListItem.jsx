import PropTypes from 'prop-types';

function GamesListItem({ homeTeam, awayTeam }) {
	return (
		<a>
			<li className="p-3 m-3 hover:bg-opacity-45  bg-green-400">
				{homeTeam} vs {awayTeam}
			</li>
		</a>
	);
}

GamesListItem.propTypes = {
	homeTeam: PropTypes.node.isRequired,
	awayTeam: PropTypes.node.isRequired,
};

export default GamesListItem;
