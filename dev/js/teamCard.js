var yo=require('yo-yo');
var tiempo=require('moment');
tiempo.locale('es');
module.exports= function(pic)
{

return  yo`
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src=${pic.team.imagen}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${pic.team.nombre}></span>
    </div>
    <p><a href="#">${pic.team.Tecnico}</a></p>
    <p>${tiempo(pic.team.fecha).fromNow()}</p>


  </div>`;
}
