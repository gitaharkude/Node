var http = require('http');
var fs = require('fs');
var path= require('path');

http.createServer(function(req,res){
    if(req.url === "/"){
    fs.readFile("./public/index.html/","UTF-8",function(error,html){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(html);
});
}else if(req.url.match("\.css$")){
    var cssPath=path.join(__dirname, 'public',req.url);
    console.log(cssPath);
}

}).listen(4000)