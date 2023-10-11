// string methods length()
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// slice() slice use for  remove word from string  and The method takes 2 parameters: start position, and end position (end not included).
let Txt = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let text = "Apple, Banana, Kiwi";
let Part = text.slice(7, 13);
console.log(Part);

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let prt = str.substr(7, 6);
console.log(Prt);

// The replace() method replaces a specified value with another value in a string:
let Text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// A string is converted to upper case with toUpperCase():
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// A string is converted to lower case with toLowerCase():
let Text2 = "Hello World!";
let text3 = Text2.toLowerCase();  
console.log(text3);

// concat() joins two or more strings:
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text2);
console.log(text6);

// The trim() method removes whitespace from both sides of a string:
let text7 = "      Hello World!      ";
let text8 = text7.trim();
console.log(text8);