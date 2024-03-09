// ⁡⁣⁣⁡⁣⁣⁢string methods = allow you to manipulate the work with text (strings)⁡    
////////////////////////////////
/* let userName = "BroCode"; */


/* console.log(userName.charAt(0)); */
// ⁡⁢⁣⁣index starts at 0 here.⁡
/* console.log(userName.lastIndexOf("r")); */

// ⁡⁢⁢⁣To get the length of the string(This is not a method)⁡
/* console.log(userName.length); */

////////////////////////////////

////////////////////////////////
/* let userName = "BroCode  "; */

// ⁡⁢⁣⁣Space trimmer method⁡
/* console.log(userName.trim()); */

/* console.log(userName.toUpperCase());

console.log(userName.toLowerCase()); */

////////////////////////////////
/* let userName = "BroCode /"; */

// ⁡⁢⁣⁣It will repeat the string  ⁡
/* console.log(userName.repeat(3)); */

/* let result = userName.startsWith(" ") ?'It has spaces.' : 'it has no spaces" ".'; */

/* let result = userName.endsWith(" ") ?'It has spaces.' : 'it has no spaces" ".'; */

// ⁡⁣⁣⁢If we want to test that if given variable has something or not, we can use this method. ⁡

/* let result = userName.includes(" ") ?'It has spaces.' : 'it has no spaces" ".'; */
/* console.log(result); */
// ⁡⁣⁣⁢for replaceAll() first element can get replaced by the second one.⁡
/* console.log(userName.replaceAll(" ","/")); */

// ⁡⁣⁣⁢to add character  with any string we can use these methods. The string can repeat until it reaches the given length.⁡ 
/* console.log(userName.padEnd(15,"/"));
console.log(userName.padStart(15,"/")); */

////////////////////////////////

//⁡⁢⁣⁢string slicing =  creating a substring from a  portion of another string.⁡
// ⁡⁣⁣⁢string.slice(start,end)⁡
const fullName = "Bro Code";
/* let firstName = fullName.slice(0,2);
console.log(firstName); */
// ⁡⁢⁣⁣here the ending index is exclusive⁡
/* let lastName = fullName.slice(3); */
// ⁡⁢⁣⁣end is the last character of the string here⁡
/* console.log(lastName); */
// ⁡⁣⁣⁢here the counting starts from the last character of the string.⁡
/* let lastChar = fullName.slice(-1);
console.log(lastChar); */

/* let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));

console.log(firstName);
console.log(lastName); */

// ⁡⁣⁢⁢exercise⁡

const email = "sample1@example.com";
let userName = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+ 1);

console.log(userName);
console.log(extension);


////////////////////////////////

