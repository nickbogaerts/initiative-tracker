import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import CreatureGroup from '../creatureGroup/CreatureGroup';
import MenuBar from '../menuBar/MenuBar';
import StyledTrack from './Track.styles';
import bindMethods from 'yaab';

class Track extends Component {
	
	constructor(props) {
		super(props);
		bindMethods(this);
	}

	render() {
		const { addHandler, clearHandler, deleteHandler, dropHandler, setInitHandler, creatures } = this.props;
		return (
			<StyledTrack>
				<MenuBar
					onAddMonster={ addHandler }
					onRollInit={ () => { console.log('roll init'); } }
					onClear={ clearHandler }
					onLoad={ () => { console.log('load'); } }
					onSave={ () => { console.log('save'); } }
					onManagePlayers={ () => { console.log('manage players'); } }
				/>
				<DragDropContext onDragEnd={ dropHandler }>
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
											<CreatureGroup
												onDelete={() => deleteHandler(index) }
												onChangeInitiative={(e) => setInitHandler(index, parseInt(e.target.value, 10)) }
												{...creature} />
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
	addHandler: PropTypes.func.isRequired,
	clearHandler: PropTypes.func.isRequired,
	deleteHandler: PropTypes.func.isRequired,
	dropHandler: PropTypes.func.isRequired,
	setInitHandler: PropTypes.func.isRequired,
	creatures: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			name: PropTypes.string,
			type: PropTypes.string,
			initiative: PropTypes.number
	}))
};

export default Track;
