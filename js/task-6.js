const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція створення елементів
function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    elements.push(div);

    size += 10;
  }

  boxes.append(...elements);
}

// Функція очищення контейнера
function destroyBoxes() {
  boxes.innerHTML = "";
}

// Обробник кнопки Create
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) return;

  destroyBoxes();
  createBoxes(amount);
  input.value = "";
});

// Обробник кнопки Destroy
destroyBtn.addEventListener("click", destroyBoxes);
