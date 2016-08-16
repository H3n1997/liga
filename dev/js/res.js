var yo = require ('yo-yo');
var team=require('./teamCard');
var form=require('./form');


module.exports = function (datos) {
  var el = yo`
    <div class="row">
      ${form()}
        ${datos.map(function (pic) {
          return team(pic);
        })}


  </div>`;
return el;
}
