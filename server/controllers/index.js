const fs = require("fs");
const path = require("path");
const dictionaryPath = path.join(__dirname, "../", "dictionary.txt");

const lookup = async cb => {
  let dictionary = await fs.readFile(dictionaryPath, "utf-8", (err, data) => {
    if (err) return err;
    return data;
  });
  return await cb(dictionary.split("\n"));
};

function printArr(arr) {
  return arr;
}

module.exports = {
  get: (req, res) => {
    const { term } = req.params;
    console.log(lookup(printArr));
    res.sendStatus(200);
  }
};
