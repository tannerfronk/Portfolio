let charName = document.querySelector("#charName")

fetch('https://swapi.co/api/people/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    charName.textContent = myJson.name
    console.log(JSON.stringify(myJson));
  }); 

import { films } from './assets/films.js'

console.log(films)

let cardList = document.querySelector("#cardList")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    cardList.appendChild(listItem)
    console.log(film.title)
}) //end of star wars API code

// Pokemon Data

import { pokemon } from "./assets/pokemon.js"

console.log(pokemon)

const pokeContainer = document.querySelector("#pokeContent")
let count = 1


pokemon.forEach(element => {
    let numPrefix = count < 10 ? '00' : '0'
    let imgName = `${numPrefix}${count++}${element.ename}.png`
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `img/${imgName}`
    cap.textContent = element.ename
    fig.appendChild(img)
    fig.appendChild(cap)
    pokeContainer.appendChild(fig)
})
               