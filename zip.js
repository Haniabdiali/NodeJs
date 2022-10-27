const fs=require('fs');
var zlib= require('zlib');

// fs.createReadStream('hello.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('hello.txt.gz'));
// console.log("file compressed")




fs.createReadStream('./hello.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./hello.txt'));
console.log('file unZip')