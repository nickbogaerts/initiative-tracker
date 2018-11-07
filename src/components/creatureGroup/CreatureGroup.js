import React from 'react';
import PropTypes from 'prop-types';

import StyledCreatureGroup, { StyledColumn, StyledGrid, StyledInitiative, StyledName, StyledRemoveButton } from './CreatureGroup.styles';

const CreatureGroup = ({name, type, initiative, onChangeInitiative, onDelete }) => (
	<StyledCreatureGroup>
	<StyledGrid>
			<StyledColumn>
				<StyledName>{name}</StyledName>
			</StyledColumn>
			<StyledColumn>
				<StyledInitiative type="number" value={ initiative } onChange={ onChangeInitiative } />
				<StyledRemoveButton type="button" onClick={ onDelete }>X</StyledRemoveButton>
			</StyledColumn>
		</StyledGrid>
	</StyledCreatureGroup>
);

CreatureGroup.propTypes = {
	name: PropTypes.string,
	initiative: PropTypes.number,
	onDelete: PropTypes.func.isRequired,
	onChangeInitiative: PropTypes.func.isRequired
}

export default CreatureGroup;
