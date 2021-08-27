const searchFood =async() => {
    const searchField = document.getElementById('search-area');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
 const res=  await fetch(url);
const data = await res.json();
displaySearchResults(data.meals)

/*     fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.meals)); */
}


// ki korsi : akta field cilo field er vitor theke text ta niyesi , akta dynamic url create koresi template string diye. then fetch call kore diyesi 




const displaySearchResults = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML= '';
    searchResult.textContent = '';//specific jta search dibo oita asbe
    /*   if(meals.length == 0){
          console.log(meal)
      }
      else{
          return" no show";
      } */
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail (${meal.idMeal})" class="col">
          <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])

    /*   fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0])); */
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent ='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div);

}


// fetch er bikolpo async