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

function createProduct(element) {
    const div = document.createElement("div");
    div.classList.add("product");

    const h = document.createElement('h2');
    h.innerText = element.product;

    const ul = document.createElement('ul');
    for (const item of element.reviews) {
        const li = document.createElement('li');
        li.innerText = item.text;
        ul.appendChild(li);
    }

    const input = document.createElement('input');
    input.type = "text";

    const btn = document.createElement("button");
    btn.innerText = `Добавить отзыв`;
    div.appendChild(h);
    div.appendChild(ul);
    div.appendChild(input)
    div.appendChild(btn);
    parent.appendChild(div);
}

for (const i of initialData) {
    createProduct(i)
}
