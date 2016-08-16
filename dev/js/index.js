var page=require('page');
var yo=require('yo-yo');
var index=require('./home');
var request=require('superagent');
var contenedor=document.getElementById('contenedor');
var res=require('./res');
page('/',function(ctx,next){
	contenedor.appendChild(index);
});

page('/resultados',loadPictures,function(ctx,next){
contenedor.appendChild(res(ctx.pictures));
});

function loadPictures(ctx,next)
{

	request
	.get('/api/pictures')
	.end(function(err,res){
		if(err) return console.log(err);
			ctx.pictures =	res.body;
			next();
	})
}
page();
