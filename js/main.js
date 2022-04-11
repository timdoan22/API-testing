//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.getElementById('search-cocktail').addEventListener('click', getDrink)
document.getElementById('random-cocktail').addEventListener('click', randomDrink)


function getDrink() {
    const drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) //parse as JSON
    .then(data => {
        // console.log(data.drinks[0])
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function randomDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
    

www.thecocktaildb.com/api/json/v1/1/random.php