const fs = require('fs');
const csv = require('csvtojson');

// Replace 'input.csv' with the path to your CSV file.
const csvFilePath = 'data.csv';
const jsonFilePath = 'output.json'; // Change the output file path as needed.
// Read the CSV file and convert it to JSON.
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // Write the JSON data to a file.
    fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log(`CSV data has been converted to JSON and saved as ${jsonFilePath}`);
      }
    });
  })
  .catch((err) => {
    console.error('Error converting CSV to JSON:', err);
  });
