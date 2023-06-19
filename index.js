
//creating a new file fcuntion use fs module of built function fs
const fs = require("fs");
fs.writeFileSync('read.txt',"How are you naseem "); //store a data how are you 

// add a data in txt file  function use append 
fs.appendFileSync('read.txt'," I am fine ")

// other file data read function use fs.readFileSync
// node js additoinal data type of buffer
// buffer mainly used to binary data 
const buff_data = fs.readFileSync("read.txt")
console.log(buff_data)

// to rename the file
fs.renameSync('read.txt',"readwrite.txt")



