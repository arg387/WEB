// fetch = Function used for making HTTP requests to fetch resources (JSON style data, images ,files)
// Simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web. 
// fetch(url, {options}) default GET option

/* fetch("https://pokeapi.co/api/v2/pokemon/charizard").then(response => {
  if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  else{
    return response.json();
  }
}).then(data => console.log(data)).catch(error => console.error(error));
 */
/* fetchData(); */
async function fetchData(){
  try{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok){
      throw new Error ("Could not fetch resources....... ");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("PokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch(error) {
      console.log(error);
  }
}