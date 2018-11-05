export const MOVE = 'MOVE';

export function moveCreature(oldPosition, newPosition) {
	return {
		type: MOVE,
		value: { oldPosition, newPosition }
	}
}

const initialState = {
	creatures: [{
		id: 1,
		name: 'Obj 1',
		type: 'Obj',
		initiative: 15
	},{
		id: 2,
		name: 'Obj 2',
		type: 'Obj',
		initiative: 14
	},{
		id: 3,
		name: 'Obj 4',
		type: 'Obj',
		initiative: 12
	}]
}

function creatures(state = initialState, action) {
	switch (action.type) {
		case MOVE:
			const { oldPosition, newPosition } = action.value;
			const creatures =  Array.from(state.creatures);
			const [creature] = creatures.splice(oldPosition, 1);
			creatures.splice(newPosition, 0, creature);
			console.log(Object.assign({}, state, { creatures }), { creatures });
			return Object.assign({}, state, { creatures });
			
		default:
			return state
	}
} 

export default creatures;
