var express =  require('express');
var path =  require('path');
var app = express();
//当用户访问根目录的时候，返回index.html文件
app.get('/',function(req,res){
    res.sendFile(path.resolve('./app/index.html'));
});
//当用户访问服务器的时候 /img/a.jpg, /代表下面的静态文件根目录
app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('app')));
app.listen(8080);