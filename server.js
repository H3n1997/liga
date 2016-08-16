//var equipos= new Array();
var express=require('express');
var multer  = require('multer');
var ext=require('file-extension');
var app=express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
    console.log("entra");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldName+'.'+ext(file.originalname));
  }
})

var upload = multer({ dest: './uploads/' });
var upload = multer({ storage: storage }).single('picture');


app.post('/api/pictures',function(req,res){
	upload(req,res,function(err){
		if (err)
			{
				return res.send(500,"error al subir el archvo");
			}
		else
			{
				return res.send('Archivo Subido con Exito');
			}
	})
});





app.use(express.static('res'));
app.set('views','./views');
app.set('view engine','jade');

app.get('/',function(req,res){
	res.render('index');
});

app.get('/resultados',function(req,res){

  res.render('index');
});




app.get('/api/pictures',function(req,res){
   var equipos=[
  		{
  			team:{
  				nombre:'Argentina',
  				Tecnico:'Fer',
  				imagen:'./pictures/argentina.png',
  				fecha:'2016/01/01'
  			}
  		},
  		{
  			team:
  			{
  				nombre:'Barcelona',
  				Tecnico:'Saul',
  				imagen:'./pictures/barcelona.png',
  				fecha:'2016/08/08'
  			}
  		},
  		{
  			team:
  			{
  				nombre:'Mexico',
  				Tecnico:'Hugo Sanchez',
  				imagen:'./pictures/mexico.png',
  				fecha:'2016/03/21'
  			}
  		},

  	];
  res.send(equipos);
});


app.listen(8080,function(){
	console.log('servidor trabajando')
});
