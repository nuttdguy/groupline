$(document).ready(function(){

  // CLIENT-SIDE JQUERY / AJAX ROUTES FOR HANDLING POST, PUT, DELETE RESPONSES

  $('#signup').click(function(){
    console.log('USER SIGNING IN  ...');
    $.post('/auth/signup', {
      username : $('#username').val() ,
      password : $('#password').val()},
      function(){
        console.log('USER SIGNED UP ...');
        // location.reload();
    });
  });

  $('#login').click(function(){
    console.log('USER LOGGING IN ...');
    $.post('/auth/login', {
      username : $('#username').val() ,
      password : $('#password').val()},
      function(){
        console.log('USER LOADED ...');
        // location.reload();
      });
  });

  $('#logout').click(function(){
    $.post('/logout', function(req,res){
      location.reload();
    });
  });

});