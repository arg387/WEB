// JSON = (JavaScript Object Notation) data-interchange format used for exchanging data between a server and a web application 
// JSON files {key:value} OR [value1,value2,value3]

// JSON.stringify() = converts a JS object to a JSON string. 
//JSON.parse() = Converts a JSON String to a JS Object 

/* const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`;
const jsonPerson = `{
    "name": "Spongebob",
    "age":30, 
    "isEmployed":true,
    "hobbies":["Jellyfishing", "Karate","Cooking"]
  
}`
const jsonPeople = `[{
  "name": "Spongebob",
  "age":34, 
  "isEmployed":true
},
{
  "name": "Patrick",
  "age":39, 
  "isEmployed":true
},
{
  "name": "Squidward",
  "age":37, 
  "isEmployed":true
},
{
  "name": "Sandy",
  "age":31, 
  "isEmployed":true
}]` */
/* const jsonString = JSON.stringify(names); */
/* const jsonString = JSON.stringify(person); */
/* const jsonString = JSON.stringify(people); */
/* const parsedData = JSON.parse(jsonPerson);
console.log(parsedData); */
////////////////////////////////////////////////
// fetch returns a promise
fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value.isEmployed))).catch(error => console.error(error));