// ⁡⁣⁣⁢dice roll⁡

function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];
  for (let i = 0; i < numOfDice; i++) {
    values.push(Math.floor(Math.random() * 6) + 1);}
  for (let i = 0; i < numOfDice; i++) {
    images.push(`<img src="img/Alea_${values[i]}.png" alt="dice ${values[i]}">`); 
  }
  diceResult.textContent = `dice: ${values.join(",")}`;
  diceImages.innerHTML = " " + images.join(" ");


}