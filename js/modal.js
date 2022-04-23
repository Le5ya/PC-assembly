const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const courseButton = document.querySelector('.course__button')
const modalInner = document.querySelector('.modal__inner')

const close = document.createElement('div')
modalInner.prepend(close)

close.style.cssText = `
	content: '';
	background-image: url('../img/close.svg');
	background-repeat: no-repeat;
	width: 40px;
	height: 40px;
	margin-left: 250px;
	margin-top: -30px;
	cursor: pointer;	
	`;

modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
})
courseButton.addEventListener('click', () => {
	modal.style.display = 'flex'
})
modal.addEventListener('click', (event) => {
	const modalContent = event.target.closest('.modal__inner')

	if (!modalContent) {
		modal.style.display = ''
	}
})
close.addEventListener('click', (event) => {
	modal.style.display = ''

})

