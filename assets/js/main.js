let inc = 0;

const emoticon = [
	':D', 'UwU', ':O', ':v',
	';)', ':3', '-.-*', ':p'
];

setInterval(function() {

	document.getElementById('change')
		.textContent = emoticon[inc];

	if (inc != 7) inc++;
	else inc = 0;
}, 4000);
