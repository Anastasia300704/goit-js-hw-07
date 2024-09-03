const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(item => {

  const categoryTitle = item.querySelector('h2').textContent;
  
  const elements = item.querySelectorAll('ul li');
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements count: ${elements.length}`);
});