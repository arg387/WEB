//⁡⁢⁣⁡⁢⁣⁢.checked = property that determines the checked state of the html checkbox or radio button element.⁡

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
  if(myCheckBox.checked){
    subResult.textContent = `You are Subscribed to this content!`;
  }
  else{
    subResult.textContent = `You are not Subscribed!`;
  }
  if(visaBtn.checked){
    payResult.textContent = `Congratulations! You have selected Visa for Payment!`;
  }
  else if(masterCardBtn.checked){
    payResult.textContent = `Congratulations! You have selected MasterCard for Payment!`;
  }
  else if(paypalBtn.checked){
    payResult.textContent = `Congratulations! You have selected PayPal for Payment!`;
  }
  else{
    payResult.textContent = `You have not selected any payment method!`;
  }
  
}