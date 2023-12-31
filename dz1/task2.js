// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let cooks = new Map();
cooks.set("Виктор", 'Пицца');
cooks.set("Ольга", 'Суши');
cooks.set("Дмитрий", 'Десерты');

let dishes = new Map();
dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set('Тирамису', "Дмитрий");
dishes.set('Чизкейк', "Дмитрий");

let orders = new Map();
let clientAlexei = { name: "Алексей" };
let clientAlexeiOrder = new Set();
clientAlexeiOrder.add('Пицца "Пепперони"');
clientAlexeiOrder.add('Тирамису');

let clientMaria = { name: "Мария" };
let clientMariaOrder = new Set();
clientMariaOrder.add('Суши "Калифорния"');
clientMariaOrder.add('Пицца "Маргарита"');

let clientIrina = { name: "Ирина" };
let clientIrinaOrder = new Set();
clientIrinaOrder.add('Чизкейк');

orders.set(clientAlexei, clientAlexeiOrder);
orders.set(clientMaria, clientMariaOrder);
orders.set(clientIrina, clientIrinaOrder);

console.log('---Task2---');
console.log('-Повара и их специализации:');
console.log(`Виктор - специализация: ${[cooks.get('Виктор')]}`);
console.log(`Ольга - специализация: ${[cooks.get('Ольга')]}`);
console.log(`Дмитрий - специализация: ${[cooks.get('Дмитрий')]}`);

console.log('-Блюда и их повара:');
console.log(`Пицца "Маргарита" - повар: ${[dishes.get('Пицца "Маргарита"')]}`);
console.log(`Пицца "Пепперони" - повар: ${[dishes.get('Пицца "Пепперони"')]}`);
console.log(`Суши "Филадельфия" - повар: ${[dishes.get('Суши "Филадельфия"')]}`);
console.log(`Суши "Калифорния" - повар: ${[dishes.get('Суши "Калифорния"')]}`);
console.log(`Тирамису - повар: ${[dishes.get('Тирамису')]}`);
console.log(`Чизкейк - повар: ${[dishes.get('Чизкейк')]}`);

console.log('-Заказы:');
console.log(`Клиент Алексей заказал: ${[...orders.get(clientAlexei)]}`);
console.log(`Клиент Мария заказала: ${[...orders.get(clientMaria)]}`);
console.log(`Клиент Ирина заказала: ${[...orders.get(clientIrina)]}`);
