'use strict';

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


const blurring = () => {
	load++;
	if (load > 99) {
		clearInterval(interval);
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = -load / 100 + 1;
	bg.style.filter = `blur(${((load * (-30)) / 100 + 30)}px)`
}

let load = 0;
let interval = setInterval(blurring, 30);
