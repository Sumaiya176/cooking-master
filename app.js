const search = document.getElementById("search");
search.addEventListener("click", function () {
    const inputLetter = document.getElementById("input-letter").value;
    document.getElementById("input-letter").value = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputLetter}`)
        .then(res => res.json())
        .then(data => displayMeals(data))

        .catch(err => {
            const details = document.getElementById("details");
            details.style.display = "block";
            details.innerHTML = `
                OOPs! items are not available now <img class="wink" src="images/frown.svg">.
                Try with another letter..
            `
        })
        
})

const displayMeals = meals => {
    const mealsSection = document.getElementById("meals-section");
    mealsSection.style.float = "left";
    const mealsObj = meals.meals;

    mealsObj.forEach(meal => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "section-div";

        const allMeals = `
           <div onclick="mealDetail('${meal.strMeal}')" class="col">
                <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                    </div>
                </div>
            </div>
           `
        sectionDiv.innerHTML = allMeals;
        // document.getElementById("meals-section").value = "";
        mealsSection.appendChild(sectionDiv);
    });
    document.getElementById("meals-section").value = "";
}

const mealDetail = mealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
    .then( res => res.json())
    .then( data => singleMealInfo(data.meals[0]));
}
const singleMealInfo = singleMeal => {
    const details = document.getElementById("details");
    details.style.display = "block";
    details.innerHTML = `
        <div class="meal-detail bg-light border-light h-100">
        <img class="single-img" src="${singleMeal.strMealThumb}">
       <div class="ingred-box">
       <h5>${singleMeal.strMeal}</h5>
       <h6>Ingredients</h6>
       <ul>
       <li>${singleMeal.strMeasure1} ${singleMeal.strIngredient1}</li>
       <li>${singleMeal.strMeasure2} ${singleMeal.strIngredient2}</li>
       <li>${singleMeal.strMeasure3} ${singleMeal.strIngredient3}</li>
       <li>${singleMeal.strMeasure4} ${singleMeal.strIngredient4}</li>
       <li>${singleMeal.strMeasure5} ${singleMeal.strIngredient5}</li>
       <li>${singleMeal.strMeasure6} ${singleMeal.strIngredient6}</li>
       <li>${singleMeal.strMeasure7} ${singleMeal.strIngredient7}</li>
       <li>${singleMeal.strMeasure8} ${singleMeal.strIngredient8}</li>
       <li>${singleMeal.strMeasure9} ${singleMeal.strIngredient9}</li>
       <li>${singleMeal.strMeasure10} ${singleMeal.strIngredient10}</li>
       </ul>
       </div>
        </div>
    `
}









