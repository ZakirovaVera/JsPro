// Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const parent = document.getElementById("main");

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function createProduct(element, btnNum) {
    const div = document.createElement("div");
    div.classList.add("product");
    div.id = btnNum;

    const h = document.createElement('h2');
    h.classList.add("heading");
    h.innerText = element.product;

    const ul = document.createElement('ul');
    ul.classList.add("item-list");
    for (const item of element.reviews) {
        const li = document.createElement('li');
        li.innerText = item.text;
        ul.appendChild(li);
    }

    const input = document.createElement('input');
    input.classList.add("user-input");
    input.type = "text";

    const btn = document.createElement("button");
    btn.classList.add("add-button");
    btn.addEventListener('click', () => addEventHandler(btn));
    btn.innerText = `Добавить отзыв`;
    btn.id = btnNum;

    const divErr = document.createElement("div");
    divErr.classList.add("error-message");


    div.appendChild(h);
    div.appendChild(ul);
    div.appendChild(input)
    div.appendChild(btn);
    div.appendChild(divErr);


    parent.appendChild(div);
}

let btnNum = 1;
for (const i of initialData) {
    createProduct(i, btnNum);
    btnNum++;
}

function addEventHandler(currenBtn) {
    const parentDiv = currenBtn.parentElement;
    const userInputElement = parentDiv.querySelector('.user-input');
    const listElement = parentDiv.querySelector('.item-list');
    const errorElement = parentDiv.querySelector('.error-message');

    try {
        if (
            userInputElement.value.length > 500 ||
            userInputElement.value.length < 50
        ) {
            throw new Error(`Длина введенного значения не соответствует требованиям`);
        }
        const li = document.createElement('li');
        li.textContent = userInputElement.value;
        listElement.appendChild(li);
        userInputElement.value = '';
        errorElement.textContent = 'Ok';
    } catch (error) {
        errorElement.textContent = error.message;
    } finally {
        console.log("Попытка была хороша");
    }
}
