var koa = require('koa');
var app = koa();

app.use(function *(next){
	this.body = 'helloworld';
	yield next;
});

app.listen(8010);