let fs = require("fs");
let path = require("path");

function tree(srcpath) {
  if (srcpath == undefined) srcpath = process.cwd();
  let content = fs.readdirSync(srcpath);
  //console.log(content);
  //
  //
  let parentFolderName = path.basename(srcpath);
  let completepath = "|___" + parentFolderName + "\n";
  for (let i = 0; i < content.length; i++) {
    completepath = completepath + "\n\t" + "|---" + content[i];
  }

  console.log(completepath);
}

module.exports = {
  treefn: tree,
};
