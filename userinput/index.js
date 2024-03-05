// ​‌‍‌⁡⁣⁢⁣How to accept user input⁡​

// ⁡⁣⁣⁢1. Easy way = window prompt⁡
// ⁡⁣⁣⁢2. Professional way = HTML textBox ⁡

/* ⁡⁢⁣⁣-------------1.Easy way-------------------------------------------------------------⁡ */
/* let username;

username = window.prompt("What's your username?","Username");
console.log(username);
document.getElementById("idh1").textContent = username; */

/* let username = window.prompt("What's your username?","Username"); */

/* ⁡⁣⁣⁡⁣⁢⁣���������-------------2.Professional way-------------------------------------------------------------��⁡⁡ */

/* let username;
document.getElementById("MySubmit").onclick =function(){
  username = document.getElementById("MyText").value;
  console.log(username);
} */

let username;
document.getElementById("MySubmit").onclick =function(){
  username = document.getElementById("MyText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}
