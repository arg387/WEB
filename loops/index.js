//⁡⁣⁣⁢for loop = repeat some code for limited amount of time.⁡
for (i=0; i<10; i+=2) {
  console.log(i);
}
for (i=10; i>=0; i-=2) {
  console.log(i);
}
for (i=0; i<=20; i++) {
  if(i==13){
    continue;
  }
  if(i==15){
    continue;
  }
  else{
    console.log(i);
  }
}
for (i=0; i<=20; i++) {
  if(i==13){
    break;
  }
  
  else{
    console.log(i);
  }
}