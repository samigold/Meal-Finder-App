 const search = document.getElementById('search'),
submit = document.getElementById('submit'),
random = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
resultHeading = document.getElementById('result-heading')
single_mealEL = document.getElementById('single-meal');

//Search meal and fetch from api
function searchMeal(e) {
    e.preventDefault();

    //Clear single meal
    single_mealEL.innerHTML = '';

    //Get search term
    const term = search.value;

     if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
     }
}

//Event listeners
submit.addEventListener('submit', searchMeal);