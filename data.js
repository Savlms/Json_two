const fs = require('fs');

// Define the data as an array of objects
const data = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', age: 35, email: 'bob.johnson@example.com' }
];

// Convert data to CSV format
const csv = data.map((record) => {
  return `${record.name},${record.age},${record.email}`;
}).join('\n');

// Specify the file path where you want to save the CSV file
const filePath = 'example.csv';

// Write the CSV data to the file
fs.writeFile(filePath, csv, 'utf8', (err) => {
  if (err) {
    console.error('Error writing CSV file:', err);
  } else {
    console.log(`CSV file has been created at ${filePath}`);
  }
});

