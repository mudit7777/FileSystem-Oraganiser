let helpObj  = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize.js");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch(command) {
    case "help":
        helpObj.helpfxn()
        break
    case "tree":
        treeObj.treefxn(inputArr[1])
        break;

    case "organize":
        organizeObj.organizefxn(inputArr[1]);
            break;

     default:
                console.log("👏Kindly enter the correct command");
                break;
}


// Organize Funcction ke Functions
// 1. input -> directory path given
// 2. create -> organized_files -> directory
// 3. identify categories of all the files present in that directory
// 4. copy/cut files to that organized directory inside of any category folder




// input = node main.js help "path"
// print -> list of all the commands 
  // 1. node main.js help "path"
  // 2. node main.js tree "path"
  // 3. node main.js organize "path"

// input -> node main.js tree "path"
// tree command executed with path ""

// input -> node main.js organize "path"
// organize  command executed with path ""