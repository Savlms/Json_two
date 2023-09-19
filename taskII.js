const fs = require('fs');

// Function to read and print JSON file
function readAndPrintJSON(filePath) {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync(filePath, 'utf8');

    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Print the JSON data to the console
    console.log(JSON.stringify(data, null, 2)); // Pretty print with an indentation of 2 spaces
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
  }
}

// Usage: Replace 'your-json-file.json' with the actual file path
const filePath = 'student.json';
readAndPrintJSON(filePath);
