const categories = document.querySelectorAll('#categories .item');


console.log(`У списку ${categories.length} категорії.`);


categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});


  const ingredients = [
      'Картопля',
      'Гриби',
      'Часник',
      'Помідори',
      'Зелень',
      'Приправи',
    ];

    const list = document.querySelector('#ingredients');

    const items = ingredients.map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      return li;
    });

    list.append(...items);