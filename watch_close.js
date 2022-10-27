/////////watch//////


// const fs = require('fs');

// fs.watch("hello.txt", (eventType, filename) => {
// console.log("\nThe file", filename, "was modified!");
// });
// fs.writeFileSync("hello.txt","Hanaa Abdurahmaan")




/////////close//////

const fs = require('fs');
  
file_descriptor = fs.openSync("./hello.txt");
  
fs.close(file_descriptor, (err) => {
  if (err)
    console.error('Failed to close file', err);
  else {
    console.log("\n File Closed successfully");
  }
});




