// Default sample recipes (with real working image links)
const sampleRecipes = [
  {
    title: "🍕 Margherita Pizza",
    ingredients: "Dough, Tomato Sauce, Mozzarella, Basil",
    instructions: "Spread sauce on dough, add cheese & basil, bake for 10-15 min.",
    image: "https://images.pexels.com/photos/10836977/pexels-photo-10836977.jpeg"
  },
  {
    title: "🍪 Chocolate Chip Cookies",
    ingredients: "Flour, Sugar, Butter, Eggs, Chocolate Chips",
    instructions: "Mix ingredients, scoop dough, bake for 12 mins at 180°C.",
    image: "https://images.pexels.com/photos/3186743/pexels-photo-3186743.jpeg"
  },
  {
    title: "🥗 Greek Salad",
    ingredients: "Tomatoes, Cucumbers, Olives, Feta Cheese, Olive Oil",
    instructions: "Chop veggies, mix with olives & feta, drizzle with olive oil.",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg"
  }
];

// Load from localStorage or default
let recipes = JSON.parse(localStorage.getItem("recipes")) || sampleRecipes;

function displayRecipes() {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";

  recipes.forEach((recipe, index) => {
    list.innerHTML += `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p><b>Ingredients:</b> ${recipe.ingredients}</p>
        <p><b>Instructions:</b> ${recipe.instructions}</p>
        <button onclick="deleteRecipe(${index})">🗑 Delete</button>
      </div>
    `;
  });
}

function addRecipe() {
  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;
  const image = document.getElementById("image").value || "https://via.placeholder.com/400";

  if (title && ingredients && instructions) {
    recipes.push({ title, ingredients, instructions, image });
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipes();

    // clear fields
    document.getElementById("title").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("image").value = "";
  } else {
    alert("Please fill in all fields!");
  }
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  displayRecipes();
}

// Show recipes on load
displayRecipes();
