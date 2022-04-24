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

