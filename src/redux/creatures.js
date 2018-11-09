import uuidv1 from 'uuid/v1';

export const ADD = 'ADD';
export const CLEAR = 'CLEAR';
export const MOVE = 'MOVE';
export const REMOVE = 'REMOVE';
export const SET_INIT = 'SET_INIT';

export function addCreatureGroup() {
	return {
		type: ADD,
		value: null
	}
}

export function clearCreatureGroups() {
	return {
		type: CLEAR,
		value: null
	}
}

export function moveCreatureGroup(oldPosition, newPosition) {
	return {
		type: MOVE,
		value: { oldPosition, newPosition }
	}
}

export function removeCreatureGroup(oldPosition, newPosition) {
	return {
		type: REMOVE,
		value: { oldPosition, newPosition }
	}
}

export function setCreatureGroupInit(index, initiative) {
	return {
		type: SET_INIT,
		value: { index, initiative }
	}
}

const initialState = {
	creatures: []
}

function creatures(state = initialState, action) {
	let creatures;
	switch (action.type) {
		case ADD:
			creatures =  Array.from(state.creatures);
			creatures.push({
				id: uuidv1(),
				name: 'New Creature',
				type: 'Obj',
				initiative: 0,
			});
			return Object.assign({}, state, { creatures });

		case CLEAR:
			return Object.assign({}, state, { creatures: [] });

		case MOVE:
		case REMOVE:
			creatures =  Array.from(state.creatures);
			const { oldPosition, newPosition } = action.value;
			creatures =  Array.from(state.creatures);
			const [creature] = creatures.splice(oldPosition, 1);
			if (action.type === MOVE) {
				creatures.splice(newPosition, 0, creature);
			}
			return Object.assign({}, state, { creatures });
			
		case SET_INIT:
			const { index, initiative } = action.value;
			creatures =  Array.from(state.creatures);
			creatures[index].initiative = initiative;
			return Object.assign({}, state, { creatures });

		default:
			return state
	}
} 

export default creatures;
