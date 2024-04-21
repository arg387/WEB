
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
  if(toFahrenheit.checked){
    temp = Number((textBox.value * 1.8) + 32);
    result.textContent = `The temperature is ${temp.toFixed(1)} °F` ;
  }
  else if(toCelsius.checked){
    temp = Number((textBox.value - 32) / 1.8);
    result.textContent =  `The temperature is ${temp.toFixed(1)} °C` ;
  }
  else{
    result.textContent = "Please select a conversion";
  }
}