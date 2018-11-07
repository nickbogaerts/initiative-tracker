import styled from "styled-components";

const StyledCreatureGroup = styled.div`
	padding: 5px 10px;
`;
export default StyledCreatureGroup;

export const StyledGrid = styled.div`
	background-color: darksalmon;
	padding: 5px;
	height: 100px;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 5px;
	border: 1px solid black;
`
export const StyledRemoveButton = styled.button`
	padding: 25px 0;
	margin: 5px;
	border: solid 1px black;
	width: 80px;
	font-size: 24px;
	border: solid 1px black;
	color: white;
	background-color: red;
`

export const StyledColumn = styled.div`
`;

export const StyledName = styled.h1`
	margin: 0;
	font-size: 18px;
	text-align: left;
`;

export const StyledType = styled.p`
	font-size: 14px;
	text-align: left;
`;

export const StyledInitiative = styled.input`
	padding: 25px 0;
	margin: 5px;
	border: solid 1px black;
	width: 80px;
	font-size: 24px;
	text-align: center;
	margin: auto;
`;
