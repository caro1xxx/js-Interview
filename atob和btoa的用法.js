是window的两个对象，btoa：binary to ascii；(base64的编码) atob：ascii to binary;（base64的解码） 无法用于Unicode字符
// Define the string
var string = 'Hello World!';

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
var decodedString = atob(encodedString);
console.log(decodedString); // Outputs: "Hello World!"