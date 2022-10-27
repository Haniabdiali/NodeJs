const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("./hello.txt");
const writeStream = createWriteStream("./hello2.txt");

const tunnel = new PassThrough();

tunnel.on("data", () => {
  console.log('we created copy file')
});

readStream.pipe(tunnel).pipe(writeStream);