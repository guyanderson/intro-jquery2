$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var iceCreams = ["flavorOne", "flavorTwo", "flavorThree", "flavorFour"];
    iceCreams.forEach(function(iceCream) {
      var userInput = $("input#" + iceCream).val();
      $("ul").append("<li>" + userInput + "</li>");
    });

  });

});
