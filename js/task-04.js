// Счетчик состоит из спана и кнопок, которые должны
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const counterValue = document.querySelector('#value');

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener('click', increment);

function increment() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};

btnDecrement.addEventListener('click', decrement);

function decrement() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};