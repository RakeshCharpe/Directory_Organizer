

let input = process.argv.slice(2);
let treeObj = require("./commands/tree.js");
let help = require("./commands/help.js");
let organize = require("./commands/organize.js");
let cmd = input[0];

switch(cmd){
    // case "view":
    //     view.viewHelper(input[1]);
    //     break;
    case "tree":
        treeObj.treeKey(input[1]);
        break;

    case "organize":
        organize.organizeHelper(input[1]);
        break;
    
    case "help":
        help.helpHelper();
        break;

    default:
        console.log("Wrong Command Entered");
        break;
}