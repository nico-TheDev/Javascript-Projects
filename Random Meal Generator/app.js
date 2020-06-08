/*

//get the data from the api

//fix the api data
// ingredients
//get youtube ID 

// fix the format of the ingredients

// fix the instructions
*/

class Recipe {
    constructor(title, category, instructions, img, link, ingredients, source) {
        this.title = title;
        this.category = category;
        this.instructions = instructions;
        this.img = img;
        this.link = link;
        this.ingredients = ingredients;
        this.source = source;
    }
}

async function getData() {
    const response = await (
        await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    ).json();
    const meal = response.meals[0];
    const units = [];
    const ingredients = [];
    // console.log(meal); // check if meal is present

    //get the units
    for (key in meal) {
        if (
            key.includes("strMeasure") &&
            meal[key] !== "" &&
            meal[key] !== null
        ) {
            units.push(meal[key]);
        }
    }
    //get the ingredients
    for (key in meal) {
        if (
            key.includes("strIngredient") &&
            meal[key] !== "" &&
            meal[key] !== null
        ) {
            ingredients.push(meal[key]);
        }
    }

    const instructions = meal.strInstructions.split(".");
    // console.log(instructions);

    const index = meal.strYoutube.split("").findIndex((el) => el === "=");
    const yt_link = meal.strYoutube.substring(index + 1);
    const finalIngredients = units.map(
        (unit, index) => `${unit} ${ingredients[index]}`
    );

    // console.log(finalIngredients);
    const recipe = new Recipe(
        meal.strMeal,
        meal.strCategory,
        instructions,
        meal.strMealThumb,
        yt_link,
        finalIngredients,
        meal.strSource
    );

    return recipe;
}

async function renderRecipe() {
    document.querySelector(".wrapper").innerHTML = "";
    const recipe = await getData();

    const markup = `
    <header class="header">
        <div class="header__vid">
            <iframe class="header__iframe" src="https://www.youtube.com/embed/${
                recipe.link
            }"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;  picture-in-picture" allowfullscreen></iframe>        
        </div>
        <div class="header__cover">
            <div class="header__text">
                <h1 class="header__name">${recipe.title}</h1>
                <p class="header__category">${recipe.category}</p>
            </div>
            <img src="${recipe.img}" alt="meal photo "  class="header__img">
        </div>
    </header>

    <section class="ingredients">
        <div class="container">
            <h2 class="ingredients__title">INGREDIENTS</h2>
            <ul class="ingredients__list">
            ${renderArray(recipe.ingredients)}
            
            </ul>
            <a href="${recipe.source}" target="_blank">Click here for Source</a>
        </div>
    </section>

    <section class="ingredients">
        <div class="container">
            <h2 class="ingredients__title">INSTRUCTIONS</h2>
            <ul class="instructions__list">
               ${renderArray(recipe.instructions)}
            </ul>
        </div>
    </section>
    `;

    document.querySelector(".wrapper").insertAdjacentHTML("afterbegin", markup);
    // console.log(recipe);
}

function renderArray(arr) {
    let markup = "";

    arr.forEach((el) => {
        if (el !== "" && !el.includes('undefined') && el !== null && el !== undefined && el.length > 4) {
            markup += `<li>${el}</li>`;
        }else{
            // console.log(el);
        }
    });

    return markup;
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    this.classList.add("downBtn");
    renderRecipe();
});
