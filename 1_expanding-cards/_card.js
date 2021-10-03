'use strict';

const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach(el => {
	el.addEventListener('click', (e) => {
		panels.forEach(el => el.classList.remove('active'))
		e.target.classList.add('active')
	})
})