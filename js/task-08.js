// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1
// параметр amount - число.Функция создает столько div,
//     сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и
// выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const numderCreateBoxes = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const createBoxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);

const arr = [];

function createBoxes(amount) {
  amount = numderCreateBoxes.value;

  let sizeBox = 30;
  if (createBoxesEl.children.length > 0) {
    sizeBox = parseInt(createBoxesEl.lastChild.style.width) + 10;
  }

  let arrEL = [];
  arrEL.length = Number(amount);

  const arrBoxElems = [...arrEL].map((el) => {
    el = document.createElement("div");

    el.style.width = `${sizeBox}px`;
    el.style.height = `${sizeBox}px`;

    function getRandomRGB(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const red = getRandomRGB(255);
    const green = getRandomRGB(255);
    const blue = getRandomRGB(255);

    el.style.backgroundColor = `rgb(${red},${green},${blue})`;

    arrEL.push(el);

    sizeBox += 10;

    return el;
  });

  createBoxesEl.append(...arrBoxElems);

  // for (let i = 0; i < amount; i += 1) {
  //   const newElem = document.createElement("div");
  //   newElem.style.width = `${sizeBox}px`;
  //   newElem.style.height = `${sizeBox}px`;

  //   function getRandomRGB(max) {
  //     return Math.floor(Math.random() * Math.floor(max));
  //   }

  //   const red = getRandomRGB(255);
  //   const green = getRandomRGB(255);
  //   const blue = getRandomRGB(255);

  //   newElem.style.backgroundColor = `rgb(${red},${green},${blue})`;

  //   arr.push(newElem);

  //   sizeBox += 10;
  // }

  // createBoxesEl.append(...arr);
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  createBoxesEl.innerHTML = "";
  document.location.reload();
}
