
const formidable =require('formidable')
const fs =  require('fs')
const http = require('http')

http.createServer(function (req, res){
    if(req.url == '/filetoupload'){
        let form= new formidable.IncomingForm();
        form.parse(req, function(err, fields, file) {
            let oldPath = file.filetoupload.filepath;
            res.setHeader(
                "Content-Type", "txt/html")
            res.write(`<video width="500px" height="500px"controls="controls"/><source src="${oldPath}"type="video/mp4"></video>`)
           
            res.end();
        }) 
    }
    else{
        res.setHeader("Content-Type", "text/html")
        res.write('<form action = "filetoupload" method = "post"  enctype = "multipart/form-data"> <input type = "file" name="filetoupload" ><br> <input type= "submit"></form>')
        return res.end()
    }
}).listen(3000, 'localhost' ,(err)=>{
    if(err) throw err
    console.log(`http://localhost:${3000}`)
})