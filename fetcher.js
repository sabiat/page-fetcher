const request = require('request');
const fs = require('fs');

const url = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];


request(url, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    process.exit();
  }
  if (response.statusCode !== 200) {
    console.log('Error: ', response.statusCode);
    process.exit();
  }
  fs.writeFile(filePath, body, (error) => {
    if (`${filePath[0]}` !== '.') {
      console.log('Invalid file path')
      process.exit();
    }
    const stats = fs.statSync(`${filePath}`);
    const fileSize = stats.size;
    if (error) {
      console.log(error)
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  })
})

