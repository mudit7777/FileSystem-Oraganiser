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





// input = node main.js help "path"
// print -> list of all the commands 
  // 1. node main.js help "path"
  // 2. node main.js tree "path"
  // 3. node main.js organize "path"

// input -> node main.js tree "path"
// tree command executed with path ""

// input -> node main.js organize "path"
// organize  command executed with path ""