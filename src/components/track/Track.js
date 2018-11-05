import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Creature from '../creature/Creature';
import StyledTrack from './Track.styles';
import bindMethods from 'yaab';

class Track extends Component {
	
	constructor(props) {
		super(props);
		bindMethods(this);
	}

	render() {
		const { onDragEnd, creatures } = this.props;
		return (
			<StyledTrack>
				<DragDropContext onDragEnd={ onDragEnd }>
					<Droppable droppableId="droppable">
						{(provided, snapshot) => (
							<div ref={provided.innerRef}>
								{ creatures.map((creature, index) => (
									<Draggable key={creature.id} draggableId={creature.id} index={index}>
										{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											>
											<Creature {...creature} />
										</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</StyledTrack>
		);
	}
}

Track.propTypes = {
	onDragEnd: PropTypes.func.isRequired,
	creatures: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			name: PropTypes.string,
			type: PropTypes.string,
			initiative: PropTypes.number
	}))
};

export default Track;
