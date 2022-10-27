const http = require('http')

const server = http.createServer((req , res ) =>{
    const url = req.url;
    if (url == '/'){
        const method = req.method;
        res.write('<html>');
        res.write('<head><title>entering page</title></head>');
        res.write('<body><form action ="/message" method ="POST"> <input type="text" name="message"/></form></body>');
        res.write('</html>');
    }
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>my nodejs</title></head>');
        res.write('<body><h1>Hellow Hanaaa! I am frome nodeJs </h1></body>');
        res.write('</html>');
        res.end();
});
server.listen(4000);