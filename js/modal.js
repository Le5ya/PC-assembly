<<<<<<< HEAD
const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const courseButton = document.querySelector('.course__button')
const modalInner = document.querySelector('.modal__inner')

//const close = document.createElement('div')
const closeImg = document.createElement('img')

closeImg.classList.add('close')

modalInner.prepend(closeImg)
console.log(modalInner);
closeImg.style.cssText = `
	width: 40px;
	height: 40px;
	margin-left: 250px;
	margin-top: -30px;
	background-image: url(../img/close.svg);
	background-repeat: no-repeat;
	background-size: content;
	border-radius: 50%;
	border: 2px solid #fff;
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
closeImg.addEventListener('click', (event) => {
	modal.style.display = ''

})

=======
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

>>>>>>> b7f903a779a3b101673d42401fbd097e7e4e1158
