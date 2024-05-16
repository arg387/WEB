const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");
// myBtn.addEventListener(event,callback)
myBtn.addEventListener("click", event =>{
  if(myImg.style.display === "none"){
    myImg.style.display = "block";
  }
  else{
    myImg.style.display = "none";
    myBtn.textContent = "Show";
  }
}); 