export const giveNavbarDropShadow = () => {
	const element = document.getElementById('navbar');
	if (!element) return;
	element.style.boxShadow = ' 0px 3px 8px 6px rgba(117, 0, 0, 0.25)';
	element.style.backgroundColor = '#ffffff';
};
