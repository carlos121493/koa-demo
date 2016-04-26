var koa = require('koa');
var app = koa();

app.use(function *(next){
	var start = new Date;
	yield next;
	var diff = new Date - start;
	this.set('X-Response-Time', diff + 'ms');
});

app.use(function *(next){
	var start = new Date;
	yield next;
	var ms = new Date - start;
	console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(){
	this.body = 'helloworld';
})

app.listen(8010);