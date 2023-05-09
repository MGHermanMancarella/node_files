const { read } = require("fs");
const fsP = require("fs/promises");
const axios = require("axios");

const file = process.argv[2];

/**read the contents of a file, and print it to the console*/
async function readMyFile(filePath) {
  try {
    let contents = await fsP.readFile(filePath, "utf8");
    console.log(`${contents}`);
  } catch (err) {
    console.log(`Error reading ${filePath}:`);
    console.log(`  Error: ENOENT: no such file or directory, open ${filePath}`);
    process.exit(1);
  }
}

/**read the HTML content of a webpage, and print it to the console*/
async function webCat(filePath) {
  try {
    let contents = await axios.get(filePath, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error fetching ${filePath}:`);
    console.log(`  Error: Request failed with status code 404`);
    process.exit(1);
  }
}

/**read the contents of a file, and print it to the console*/
async function WriteFile(content, fileName) {

  try {
    fsP.writeFile("fileName", content, "utf8");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Successfully wrote to file!");
}


/**read the HTML content of a webpage, and print it to the console*/
async function webCat(filePath) {
  try {
    let contents = await axios.get(filePath, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error fetching ${filePath}:`);
    console.log(`  Error: Request failed with status code 404`);
    process.exit(1);
  }
}


/**determine if the passed in resource is a URL or local file, call the
 * appropriate read function
 */
function checkFileTypeAndPrint(resource) {
  resource.startsWith('http') ? webCat(resource) : readMyFile(resource);
}

checkFileTypeAndPrint(file);
