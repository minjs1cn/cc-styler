import { setStyle } from './src/main';

const div = document.createElement('div');
document.body.appendChild(div);

let left;
const style = {
	width: 100,
	height: 100,
	backgroundColor: 'red',
	position: 'absolute',
	left,
	transform: 'translate(10px)',
	flex: 1,
};

setStyle(div, style);

setTimeout(() => {}, 1000);
