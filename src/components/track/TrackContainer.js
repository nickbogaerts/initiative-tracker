import { connect } from 'react-redux';
import {
	addCreatureGroup,
	clearCreatureGroups,
	moveCreatureGroup,
	removeCreatureGroup
} from '../../redux/creatures';
import Track from './Track';

const mapStateToProps = ({ creatures }) => creatures;

const mapDispatchToProps = dispatch => {
	return {
		addHandler: () => dispatch(addCreatureGroup()),
		clearHandler: () => dispatch(clearCreatureGroups()),
		deleteHandler: (index) => dispatch(removeCreatureGroup(index)),
		dropHandler: ({ source, destination }) => {
			if (source && destination) {
				dispatch(moveCreatureGroup(source.index, destination.index))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Track)
