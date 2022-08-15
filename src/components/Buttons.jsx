import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	/* Adapt the colors based on primary prop */
	background: linear-gradient(
		94.03deg,
		${(props) => (props.primary ? '#a300ff' : 'black')} -13.71%,
		${(props) => (props.primary ? '#fb1281' : 'black')} 98.88%
	);
	color: #ffffff;
	border-image-source: linear-gradient(
		180deg,
		${(props) => (!props.primary ? '#a300ff' : 'black')} 0%,
		${(props) => (!props.primary ? '#fb1281' : 'black')} 100%
	);
	border: ${(props) => (props.primary ? '0.543329px' : '1.09px')} solid
		${(props) => (props.primary ? '#ffffff' : 'none')};
	width: 124.97px;
	height: 35.32px;
	border-image-slice: 1;

	@media (min-width: 1040px) {
		width: 230px;
		height: 65px;
		font-size: 22px;
		font-weight: 400;
		line-height: 22px;
	}
`;
