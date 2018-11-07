import React from 'react';
import PropTypes from 'prop-types';

import StyledMenuBar,
	{
		StyledAddMonsterButton,
		StyledClearButton,
		StyledRollInitButton,
		StyledManagePlayersButton,
		StyledLoadButton,
		StyledSaveButton
	} from './MenuBar.styles';

const MenuBar = ({onAddMonster, onRollInit, onClear, onLoad, onSave, onManagePlayers}) => (
	<StyledMenuBar>
		<StyledAddMonsterButton onClick={ onAddMonster }>Add</StyledAddMonsterButton>
		<StyledClearButton onClick={ onClear }>Clear</StyledClearButton>
		<StyledRollInitButton onClick={ onRollInit }>Roll</StyledRollInitButton>
		<StyledManagePlayersButton onClick={ onManagePlayers }>Players</StyledManagePlayersButton>
		<StyledLoadButton onClick={ onLoad }>Load</StyledLoadButton>
		<StyledSaveButton onClick={ onSave }>Save</StyledSaveButton>
	</StyledMenuBar>
);

MenuBar.propTypes = {
	onAddMonster: PropTypes.func.isRequired,
	onRollInit: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired,
	onLoad: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	onManagePlayers: PropTypes.func.isRequired
};

export default MenuBar;
