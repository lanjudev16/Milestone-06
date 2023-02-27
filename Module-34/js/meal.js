const meals=(value)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    fetch(url).then(res=>res.json()).then(meal=>displayMeals(meal.meals))
}


const displayMeals=meals=>{
    const mealContainer=document.getElementById('meals-container')
    mealContainer.innerHTML=''
    meals.forEach(meal => {
        const mealDiv=document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML=`
        <div class="col">
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strIngredient1}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, omnis corporis, veniam ex facilis, placeat nisi dolor laboriosam distinctio accusantium voluptates suscipit ipsa cupiditate similique aliquid. Quod optio natus nulla.</p>
            </div>
            <button onClick="idMeal2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details">
            Meals Details
           </button>
        </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    });
}

const searchMeals=()=>{
    const searchValue=document.getElementById('search-field').value
    meals(searchValue)
}

const idMeal=(idMeal)=>{




    url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url).then(res=>res.json()).then(data=>displayMealDetailsById(data.meals[0]))
    .catch(error=>{
        console.log(error)
    })
}

const idMeal2=async(idMeal)=>{

    try{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        const res=await fetch(url)
        const data=await res.json()
        displayMealDetailsById(data.meals[0])
    }catch(error){
        console.log(error)
    }


}

const displayMealDetailsById=(meal)=>{
    console.log(meal)
    const mealDetailsLabel=document.getElementById('meal-detailsLabel')
    mealDetailsLabel.innerText=meal.strMeal
    const mealDetailsBody=document.getElementById('meal-detailsBody')
    mealDetailsBody.innerHTML=`
    <img width="400px" height="300px" src='${meal.strMealThumb}'/>
    <h2 >${meal.strMeasure6
    }</h2>
    `
}
meals('fish')