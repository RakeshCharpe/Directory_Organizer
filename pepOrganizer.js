

let helpObj = require("../activity/commands/help");
let treeObj = require("../activity/commands/tree");
let organizeObj = require("../activity/commands/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
  case "tree":
    // node main.js tree "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"
    treeObj.treefn(inputArr[1]);
    break;
  //  input -> node main.js organize "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"
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
