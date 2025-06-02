// test run
const os = require("os");

console.log("System Information:");
console.log(`Operating System: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`CPU Cores: ${os.cpus().length}`);
