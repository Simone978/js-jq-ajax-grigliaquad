


// console.log(numero);

$('.check').click(function(){
  var numero = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
  if(numero <= 5){
    $(this).addClass('yellow');
  }else{
    $(this).addClass('green');
  }
  $('.center p').text(numero);
});
