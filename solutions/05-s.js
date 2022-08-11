// Recursion example
// Before I wrap up, I wanted to show you a bit of a advanced concept of using functions within functions.
// The main idea is that you can also call your same function within itself to return a result.
const findCategory = (categories, name) => {
  for (const category of categories) {
    console.log(category.name);

    if (category.name === name) {
      return category;
    }

    if (category.children && category.children.length > 0) {
      const found = findCategory(category.children, name);

      if (found) {
        return found;
      }
    }
  }
};

const categoryTree = [
  {
    name: 'Home and Garden',
    children: [
      {
        name: 'Plants',
        children: [{ name: 'Flowers' }, { name: 'Outdoor plants' }, { name: 'Indoor plants' }],
      },
    ],
  },
  {
    name: 'Electronics',
    children: [
      {
        name: 'Phones',
        children: [{ name: 'Smartphones' }, { name: 'Tablets' }],
      },
      {
        name: 'Computers',
        children: [{ name: 'Laptops' }, { name: 'Desktops' }],
      },
    ],
  },
];

console.log(findCategory(categoryTree, 'Laptops')); // { name: 'Computers', children: [{ name: 'Laptops' }, { name: 'Desktops' }] }
