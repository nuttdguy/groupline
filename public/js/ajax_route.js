$(document).ready(function(){

  // CLIENT-SIDE JQUERY / AJAX ROUTES FOR HANDLING POST, PUT, DELETE RESPONSES

  $('#signup').click(function(){
    console.log('USER SIGNING IN  ...');

    if ( $('#password').val() == '' || $('#username').val() == '' ) {

      displayAuthError();

    } else {
      $.post('/auth/signup', {
          username: $('#username').val(),
          password: $('#password').val()
        },
        function () {
          console.log('USER SIGNED UP ...');
          location = '/';  // MAKES URL REQUEST TO SERVER
        });
    }
  });

  $('#login').click(function(){
    console.log('USER LOGGING IN ...');

    if ( $('#password').val() == '' || $('#username').val() == '' ) {

      displayAuthError();

    } else {
      $.post('/auth/login', {
          username: $('#username').val(),
          password: $('#password').val()
        },
        function () {
          console.log('USER LOADED ...');
          // location.reload();
          location = '/';  // MAKES URL REQUEST TO SERVER
        });
    }
  });

  $('#logout').click(function(){
    $.post('/auth/logout', function(){
      location.reload();  // RELOADS THE CURRENT WINDOW
    });
  });


  function displayAuthError() {
    setTimeout(function() {
      $('#err-message').css({'display': 'none'});
    }, 2000);

    $('#err-message').text('username and/or password cannot be empty');
    $('#err-message').css({'display': 'block'});
  }

});