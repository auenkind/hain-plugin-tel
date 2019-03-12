var fs = require('fs');

var dir = process.env.LOCALAPPDATA+'/hain-user/devplugins/hain-plugin-tel/';
console.log(dir);
fs.copyFileSync("index.js", dir+"index.js");
fs.copyFileSync("package.json", dir+"package.json");