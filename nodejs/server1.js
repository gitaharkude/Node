var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){

if(req.url=== "/"){
fs.readFile("./public/index.html/","UTF-8",function(error,html){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(html);
});
} else if(req.url.match("\.css$")){
    var csspath = path.join(__dirname,'public',req.url);
    var fileStream = fs.createReadStream(csspath,"UTF-8");
    res.writeHead(200,{"content-Type":"text/css"});
    fileStream.pipe(res);
}else if(req.url.match("\.jpg$")){
    var imagepath = path.join(__dirname,'public',req.url);
    var fileStream = fs.createReadStream(imagepath);
    res.writeHead(200,{"content-Type":"image/jpg"});
    fileStream.pipe(res);
}else{
    res.writeHead(404,{'content-Type':'text/html'});
    res.end("no page found");

}

}).listen(4000)