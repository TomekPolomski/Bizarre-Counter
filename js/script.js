const increaseBtn = document.querySelector('.counter__button--increase');
const decreaseBtn = document.querySelector('.counter__button--decrease');
const counterResetBtn = document.querySelector('.counter__reset-button');
const counterValue = document.querySelector('.counter__value');
const counterTitle = document.querySelector('.counter__title');
const counterBody = document.querySelector('.counter');

let initialValue = 0;

increaseBtn.addEventListener('click', () => {
	initialValue++;

	if (initialValue > 5) {
		initialValue = 5;
		counterBody.classList.add('counter--limit');
		counterTitle.innerHTML = `Limit! Buy <b>PRO</b> for > 5`;
		increaseBtn.disabled = true;
		decreaseBtn.disabled = true;
		counterResetBtn.classList.add('puls');
	}

	counterValue.textContent = initialValue;
	increaseBtn.blur();
});

decreaseBtn.addEventListener('click', () => {
	initialValue--;

	if (initialValue < 0) {
		initialValue = 0;
	}
	counterValue.textContent = initialValue;
	counterTitle.textContent = 'Bizarre Counter';
	counterBody.classList.remove('counter--limit');
	decreaseBtn.blur();
});

counterResetBtn.addEventListener('click', () => {
	initialValue = 0;
	counterValue.textContent = 0;
	counterTitle.textContent = 'Bizarre Counter';
	counterBody.classList.remove('counter--limit');
	increaseBtn.disabled = false;
	decreaseBtn.disabled = false;
	counterResetBtn.classList.remove('puls');
	counterResetBtn.blur();
});

document.addEventListener('keydown', () => {
	initialValue++;

	if (initialValue > 5) {
		initialValue = 5;
		counterBody.classList.add('counter--limit');
		counterTitle.innerHTML = `Limit! Buy <b>PRO</b> for > 5`;
		increaseBtn.disabled = true;
		decreaseBtn.disabled = true;
		counterResetBtn.classList.add('puls');
	}

	counterValue.textContent = initialValue;
});
