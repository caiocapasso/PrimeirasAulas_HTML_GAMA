(function () {
const BASE_URL = "https://api.chucknorris.io/jokes/";
const URL_FETCH_CATEGORIES = "https://api.chucknorris.io/jokes/";
const METHOD = "GET";
const CONTENT_TYPE = "application/json";
const MODE = "cors";

var searchForm = document.querySelector(".search-form");
var jokeIcon = document.querySelector('#avatar');
var jokeText = document.querySelector('#joke');
var jokeContainer = document.querySelector('.joke-container')


searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var query = document.querySelector(".search-input").value;
    var category = document.querySelector('.search-select').value;

    console.log('query = ', query);
    console.log('category = ', category)

    jokeIcon.src = "";
    jokeText.innerText = "";
    jokeContainer.setAttribute('style', 'opacity: 0.0');

    if (query && query.length > 0){
        getJokeFromQuery(query);
    } else if (category && category.length > 0){
        getJokeFromCategory(category);
    } else {
        getJokeFromRandom();
    }

    document.querySelector('.search-input').value = "";
    document.querySelector('.search-select').value = "";
  });

async function getJokeFromRandom(){
    console.log('getJokeFromRandom');
    const joke = await getRandomJoke();
    console.log('joke = ', joke.value);


    jokeIcon.src = joke.icon_url;
    jokeText.innerText = joke.value;
    jokeContainer.setAttribute('style', 'opacity: 1.0');
}

async function getJokeFromCategory(category){
    console.log("getJokeFromCategory => category = ", category);
    const joke = await getRandomJokeFromCategory(category);
    console.log('joke = ', joke.value);

    jokeIcon.src = joke.icon_url;
    jokeText.innerText = joke.value;
    jokeContainer.setAttribute('style', 'opacity: 1.0');
}

async function getJokeFromQuery(query){
    console.log("getJokeFromQuery => query = ", query);
    const joke = await getRandomJokeFromQuery(query);
    console.log('joke = ', joke.result[0].value);

    jokeIcon.src = joke.result[0].icon_url;
    jokeText.innerText = joke.result[0].value;
    jokeContainer.setAttribute('style', 'opacity: 1.0');
}

async function getRandomJokeFromCategory(category){
    console.log("getRandomJokeFromCategory => category = ", category);
    try { 
        const response = await fetch(`${BASE_URL}random?category=${category}`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json();
    } catch (error) {
        console.log(error);
    } finally {

    }
}


async function getRandomJokeFromQuery(query){
    console.log("getRandomJokeFromQuery => query = ", query);
    try { 
        const response = await fetch(`${BASE_URL}search?query=${query}`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json();
    } catch (error) {
        console.log(error);
    } finally {

    }
}

async function getRandomJoke(){
    console.log("getRandomJoke");
    try{
        const response = await fetch(`${BASE_URL}random`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json();
    } catch (error){
        console.log(error);
    }
}

})();
