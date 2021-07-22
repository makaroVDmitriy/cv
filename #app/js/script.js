$(function () {

	/* burger */
	let navBurger = document.querySelector('.nav__burger');
	navBurger.addEventListener('click', function () {
		navBurger.classList.toggle('open');
	})
	/* burger */


	/* signature svg */
	const paths = document.querySelectorAll("#signature path");

	for (let i = 0; i < paths.length; i++) {
		console.log(`length ${i + 1} is ${Math.ceil(paths[i].getTotalLength())}`)
	}
	/* signature svg */


});