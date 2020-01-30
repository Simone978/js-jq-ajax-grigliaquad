// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
for (var i = 0; i <=6; i++) {
  $('.wrapper').append('<div class="line">')
}

var line = $('.line');
for (var i = 0; i < line.length; i++) {
  line.append("<div class='box check'></div>");
}

$('.check').click(function(){
  var element = $(this);
  $.ajax(
    {
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data) {
      var numero = data.response;
      if(numero <= 5){
        element.addClass('yellow');
      }else{
        element.addClass('green');
      }
      element.html('<p>'+numero+'<p>');
      },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errori);
      }
    }
  );
});
