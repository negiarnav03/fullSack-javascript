async function getRecipe(choice) {
  const response = await fetch("/api/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ choice }),
  });

  const recipe = await response.json();

  // Update UI
  document.getElementById("recipeTitle").innerText = recipe.name;

  const list = document.getElementById("ingredientsList");
  list.innerHTML = "";

  // Protein
  const protein = document.createElement("li");
  protein.innerText =
    recipe.ingredients.protein.name +
    " (" +
    recipe.ingredients.protein.preparation +
    ")";
  list.appendChild(protein);

  // Salsa
  const salsa = document.createElement("li");
  salsa.innerText =
    recipe.ingredients.salsa.name +
    " (" +
    recipe.ingredients.salsa.spiciness +
    ")";
  list.appendChild(salsa);

  // Toppings
  recipe.ingredients.toppings.forEach((topping) => {
    const li = document.createElement("li");
    li.innerText = topping.name + " - " + topping.quantity;
    list.appendChild(li);
  });
}