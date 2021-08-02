

let helpObj = require("../activity/commands/help");
let treeObj = require("../activity/commands/tree");
let organizeObj = require("../activity/commands/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
  case "tree":
   
    treeObj.treefn(inputArr[1]);
    break;

  case "organize":
    organizeObj.organizefn(inputArr[1]);
    break;
  case "help":
    helpObj.helpfn();
    break;
  default:
    console.log("🙏 kindly enter the correct cmd");
    break;
}
