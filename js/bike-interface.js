var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeColor').click(function(){
    var color = $('#color').val();
  $.get('https://bikeindex.org:443/api/v2/bikes_search?page=1&colors=' + color, function(response) {
    console.log(response);
  }).fail(function(error){
    $('.showBikes').text(error.responseJSON.message);
  });
});
});