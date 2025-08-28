// greet.js

const name = process.argv[2]; // Get the third argument from CLI

if (!name) {
  console.log('❗ Please provide your name.');
} else {
  console.log(`👋 Hello, ${name}! Welcome to Node.js CLI.`);
}






// global-var.js

global.greeting = 'Hello from global!';

function sayHi() {
  console.log(global.greeting);
}

sayHi(); // Output: Hello from global!




// readFile.js

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('📄 File Contents:\n', data);
});



// server.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🌍 Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});