const { read } = require('fs');
const fsP = require('fs/promises');

const file = process.argv[2];

async function readMyFile(filePath) {
  console.log(filePath);
  try {
    let contents = await fsP.readFile(filePath, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error reading ${filePath}:`);
    console.log(`  Error: ENOENT: no such file or directory, open ${filePath}`);
    process.exit(1);
  }
}

readMyFile(file);