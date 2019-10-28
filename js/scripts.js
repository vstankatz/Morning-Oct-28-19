$(document).ready(function() {
  $(".form").submit(function(event) {
  var favThing1 = $("input#favThing1").val();
  var favThing2 = $("input#favThing2").val();
  var favThing3 = $("input#favThing3").val();
  var favThing4 = $("input#favThing4").val();
  var favThing5 = $("input#favThing5").val();
  var favThing6 = $("input#favThing6").val();
  var favThingAll = [favThing1, favThing2, favThing3, favThing4, favThing5, favThing6];

  console.log(favThingAll);
  event.preventDefault();

  var newArray = [];
  newArray.push([favThingAll[0]], [favThingAll[1]], [favThingAll[2]]);
  var str = '<ul>'

  newArray.forEach(function(array) {
    str += '<li>' + array + '</li>';
  });

  str += '</ul>';
  document.getElementById('output').innerHTML = str;
  console.log(newArray);

  //
  // $('ul#outputUl').append("<li>" + newArray + "</li>");

});



});
