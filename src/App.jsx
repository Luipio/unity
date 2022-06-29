import React from 'react';
import Marquee from 'react-double-marquee';
import { Button } from './components/Buttons';

function App() {
	return (
		<div
			style={{
				width: '200px',
				whiteSpace: 'nowrap',
			}}
		>
			<Marquee>Some really really really really really long text</Marquee>
			<Button primary>claim</Button>
			<Button>litepaper</Button>
		</div>
	);
}

export default App;
