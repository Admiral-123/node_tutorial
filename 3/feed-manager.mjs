import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonFile = join(__dirname, 'feeds.json');

console.log(jsonFile);

//console.log(__dirname);

// console.log(import.meta.url)   // the url of current file