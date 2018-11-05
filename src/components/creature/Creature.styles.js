import styled from "styled-components";

const StyledCreature = styled.div`
	background-color: darksalmon;
	margin: 0 10px 10px 10px;
	height: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5px;
	border: 1px solid black;
`;

const StyledColumn = styled.div`
`;

const StyledName = styled.h1`
	font-size: 18px;
	text-align: left;
`;

const StyledType = styled.p`
	font-size: 14px;
	text-align: left;
`;

const StyledInitiative = styled.input`
	height: 80px;
	width: 80px;
	font-size: 24px;
	text-align: center
	margin: auto;
`;

export default StyledCreature;
export {StyledColumn, StyledName, StyledType, StyledInitiative };
