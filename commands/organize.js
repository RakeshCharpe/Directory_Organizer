let fs = require("fs");
let path = require("path");

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  images: ["png", "jpg"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

function organize(srcpath) {
  if (srcpath == undefined) srcpath = process.cwd();
  // console.log("Organize is Implemeted", srcpath);
  //1. create organized files directory
  //2. scan whole directory srcpath=extension check
  //3. copy to that dirctory to which it belongs
  let organizedFilePath = path.join(srcpath, "organized_files");
  if (fs.existsSync(organizedFilePath) == false) {
    fs.mkdirSync(organizedFilePath);
  }

  let allTheFiles = fs.readdirSync(srcpath);
  for (let i = 0; i < allTheFiles.length; i++) {
    let fullorignalPath = path.join(srcpath, allTheFiles[i]);
    if (fs.lstatSync(fullorignalPath).isFile() == true) {
      let folderName = checkext(allTheFiles[i]);
      copyFileTodest(folderName, fullorignalPath, srcpath);
    }
  }
}
function copyFileTodest(folderName, fullorignalPath, srcpath) {
  let destFolderpath = path.join(srcpath, "organized_files", folderName);
  if (fs.existsSync(destFolderpath) == false) {
    fs.mkdirSync(destFolderpath);
  }
  let originalFilename = path.basename(fullorignalPath);
  let destFilepath = path.join(destFolderpath, originalFilename);
  fs.copyFileSync(fullorignalPath, destFilepath);
  console.log(originalFilename, "copied to", folderName);
  fs.unlinkSync(fullorignalPath);
}
function checkext(filename) {
  let extName = path.extname(filename);
  extName = extName.slice(1);
  for (let key in types) {
    for (let i = 0; i < types[key].length; i++) {
      if (types[key][i] == extName) {
        return key;
      }
    }
  }
  return "others";
}

module.exports = {
  organizefn: organize
};
