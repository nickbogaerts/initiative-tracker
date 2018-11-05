import React from 'react';
import PropTypes from 'prop-types';

import StyledCreature, { StyledColumn, StyledName, StyledType, StyledInitiative } from './Creature.styles';

const Creature = ({name, type, initiative}) => (
	<StyledCreature>
		<StyledColumn>
			<StyledName>{name}</StyledName>
			<StyledType>{type}</StyledType>
		</StyledColumn>
		<StyledColumn>
			<StyledInitiative type="number" value={ initiative } />
		</StyledColumn>
	</StyledCreature>
);

Creature.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	initiative: PropTypes.number
}

export default Creature;
