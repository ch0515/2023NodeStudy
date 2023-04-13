const { dir } = require("console");
const fs = require("fs");
const path = require("path");

//dirPath에 있는 모든 파일목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  //dirPath에 있는 모든 파일목록의 배열(하위 경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const destPath = path.join(dirPath, file);
    //dirPath + "\\" + file;
    //폴더(디렉토리)라면 해당 폴더에 있는 모든 파일목록들을 체크한다
    if (fs.statSync(dirPath + "\\" + file).isDirectory()) {
      getAllFiles(destPath, arrOfFiles);
    } else {
      //파일이라면 파일목록에 추가
      arrOfFiles.push(destPath);
    }
  });
  return arrOfFiles;
}

function getDuplicated(baseDir) {
  if (!fs.existsSync(baseDir)) {
    console.error("폴더가 존재하지 않음");
    return;
  } else {
    console.log("폴더가 존재함");
  }

  const duplicatedDir = path.join(baseDir, 'duplicated');
  if (!fs.existsSync(duplicatedDir)) {
    fs.mkdirSync(duplicatedDir);
  }

  //base폴더에 있는 모든 파일들 list
  const arrayOfFiles = getAllfiles(baseDir, []);

  //중복된 파일들(절대 경로) list
  const duplicatedFiles = [];

  //file : 파일의 절대 경로(string)
  arrayOfFiles.forEach(function(file, idx){
    //절대경로에서 파일이름만 추출
    const fileName = path.basename(file);

  });
  const duplicatedIdx = arrayOfFiles.findIndex(function(otherFile, otherIdx){
    if(otherIdx > idx && otherFile.includes(fileName))
      return true;
    else
      return false;
  });

  // 중복된 파일이 존재한다면
  if(duplicatedIdx > -1){
    const duplicatedFile = arrayOffFiles[duplicatedIdx];

    duplicatedFile.push(file);
    duplicatedFiles.push(duplicatedFile);
  }
}

// const files = getAllFiles(path.join(__dirname, 'base'), []);
// console.log(files.join("\n"));

getDuplicated(path.join(__dirname, "base"));
