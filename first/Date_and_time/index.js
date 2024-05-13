// Date objects = Objects that contain values that represent date and times. These date objects can be formatted and changed to suite our need.
// Date(year,month,day,hour,minute,second,ms)
// epic date. try before understanding
/* const date = new Date(0); */
/////////////////////////////////////////////////
// The ways to generate custom dates
/* const date = new Date("2024-01-02T12:00:00Z"); */


/* const date = new Date(2024,0,1,2,3,4,5); */

/* const date = new Date(1700000000000); */

//////////////////////////////////////////////////
/* const date = new Date();
const year = date.getFullYear(); 
const month = date.getMonth();
const day = date.getDate();  */
// to get first day of the week 
/* const dayOfWeek = date.getDay() */
/////////////////////////////////// 
/* const hour = date.getHours(); 
const minutes = date.getMinutes(); 
const seconds = date.getSeconds();  */





/* console.log(year);
console.log(month); 
console.log(day);
console.log(hour); 
console.log(minutes); 
console.log(seconds); 
console.log(dayOfWeek);
console.log(date); */
////////////////////////////////////////
// example of setting a new date 
/* const date = new Date();
date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
console.log(date); */
//////////////////////////////////

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2> date1){
  console.log("HAPPY NEW YEAR!!!");
}