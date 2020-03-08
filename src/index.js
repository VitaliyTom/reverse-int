module.exports = function reverse(n) {
	if (Math.sign(n) === -1) {
		n = n * -1;
	}
	let array = ('' + n).split('');
	let arrayReverse = new Array(array.length);
	let j = array.length;
	for (let i = 0; i < array.length; i++) {
		arrayReverse[j] = array[i];
		j--;
	}
	return +arrayReverse.join('');
};
