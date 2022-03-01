"use strict";

const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
	const triggerBottom = window.innerHeight * 0.8;

	boxes.forEach(el => {
		const boxTop = el.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			el.classList.add("show");
		} else {
			el.classList.remove("show");
		}
	});
};

checkBoxes();
window.addEventListener("scroll", checkBoxes);
