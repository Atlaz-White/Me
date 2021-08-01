var i = 0;
setInterval(function() {
	let ob1 = document.querySelector('#mod');
	if (i == 0) {
		i++;
		ob1.textContent = ':D';
	} else if (i == 1) {
		i++;
		ob1.textContent = 'UwU';
	} else if (i == 2) {
		i++;
		ob1.textContent = ':0';
	} else if (i == 3) {
		i++;
		ob1.textContent = ':3';
	} else {
		i = 0;
		ob1.textContent = ';)';
	};
}, 4000);
