const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',
];

const webTechs = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Node',
	'MongoDB',
];

if (countries.includes('Ethiopia')) {
	console.log('ETHIOPIA');
} else {
	countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
	console.log('Sass is a CSS preprocess');
} else {
	webTechs.push('Sass');
	console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

let text =
	'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let newText = text.replace(/[.,]/g, '').split(' ');
console.log(newText);
console.log(newText.length);
