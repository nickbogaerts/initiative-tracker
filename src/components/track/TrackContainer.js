import { connect } from 'react-redux';
import { moveCreature } from '../../redux/creatures';
import Track from './Track';

const mapStateToProps = ({ creatures }) => creatures;

const mapDispatchToProps = dispatch => {
	return {
		onDragEnd: ({ source, destination }) => {
			if (source && destination) {
				dispatch(moveCreature(source.index, destination.index))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Track)
