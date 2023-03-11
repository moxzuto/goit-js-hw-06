const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const ingredientsItems = ingredients.map((ingredients) => {
  const li = document.createElement("li");
  li.classList.add("item");
  return li;
})

ingredientsList.append(...ingredientsItems);

// console.log(ingredientsItems);