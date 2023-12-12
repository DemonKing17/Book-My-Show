const fs = require("fs");

//create folder
const createFolder = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};

const defaultPost =
  '[{"id": "2020","title": "HTML","url": "http://someurl.com","description": "the best"}]';

const createFile = (file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, defaultPost);
  }
};

module.exports = {
  createFolder,
  createFile,
};
