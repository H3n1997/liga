var yo=require('yo-yo');
var request=require('superagent');
var webcam=require('webcamjs');

module.exports= function()
{
  return yo`
  <div class="row">

    <form class="col s12" enctype="multipart/form-data" onsubmit=${enviarDatos}>
      <div class="btn btn-flat cyan input-btn">
        <input type="file" name="picture">
        <span>Subir Foto</span>
        <i class="fa fa-cloud-upload"></i>
      </div>

      <div class="buttons">
        <button type="submit" class="btn btn-flat green ">
          <i class="fa fa-upload"></i>
        </button>

        <button type="button" class="btn btn-flat red  hide">
          <i class="fa fa-ban"></i>
        </button>

      </div>

    </form>
        <div class="col s12">
          <button class="btn btn-flat blue" onclick=${camarita}>
          <i class="fa fa-camera"></i>
          </button>
        </div>
        <div class="col s12">
          <div id="camaraWeb"></div>
          <button class="btn btn-flat light-green" onclick=${capturar}>
            <i class=" fa fa-eye"></i>
          </button>
          <div id="foto"></div>
        </div>
  </div>`;


function enviarDatos(ev)
{
  ev.preventDefault();
  var data= new FormData(this);
  console.log(data);
  request
  .post('/api/pictures')
  .send(data)
  .end(function(err,res){
    console.log(arguments);
  })
}

function camarita()
{
  webcam.attach('#camaraWeb');
}

function capturar()
{
  webcam.snap(function(data_uri){
    document.getElementById('foto').innerHTML='<img src="'+data_uri+'" />';
  });
}



}
