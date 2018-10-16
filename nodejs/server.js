//create web server using HTTP module at node.js
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("request receive at server" + req.url+"<br>");
    res.write("hello from server");
    res.end();

}).listen(3000)