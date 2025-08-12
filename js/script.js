const categories = document.querySelectorAll('#categories .item');


console.log(`У списку ${categories.length} категорії.`);


categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});


//===========================================

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = document.querySelector('#ingredients');
const items = [];

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  items.push(li);
}

list.append(...items);

//=============================

    const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

let markup = '';
for (const image of images) {
  markup += `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}

gallery.insertAdjacentHTML('beforeend', markup);


//===========================================

let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);