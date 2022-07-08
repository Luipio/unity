import Marquee from 'react-double-marquee';

import styled from 'styled-components';

const TickerBlock = styled.div`
	width: 100vw;
	white-space: nowrap;
`;

const Image = styled.img`
	width: 300px;
	@media (min-width: 1040px) {
		width: 685px;
	}
`;

const Ticker = ({ direction, imgArr }) => {
	return (
		<TickerBlock>
			<Marquee
				height={30}
				childMargin={0}
				delay={0}
				speed={0.1}
				direction={direction}
			>
				{imgArr.map((imgItem, key) => (
					<Image key={key} src={imgItem.imgSrc} alt={imgItem.name} />
				))}
			</Marquee>
		</TickerBlock>
	);
};

export default Ticker;
