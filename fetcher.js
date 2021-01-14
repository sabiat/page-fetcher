const request = require('request');
const fs = require('fs');

const url = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];

request(url, (error, response, body) => {
  fs.writeFile(filePath, body, (error) => {
    const stats = fs.statSync(`${filePath}`);
    const fileSize = stats.size;
    if (error) {
      console.log(error)
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  })
})



