$(document).ready(function(){
  setTimeout(function(){
      $('#popUpmain').css('display', 'block'); }, 5000);
});

$('.submitId').click(function(){
  $('#popUpmain').css('display', 'none');
})