$(document).ready(function () {

  // CLIENT-SIDE JQUERY / AJAX ROUTES FOR HANDLING POST, PUT, DELETE REQUESTS

  //======================================================
  // BEGIN == AUTHENTICATION ROUTES
  //======================================================

  //=====================================
  //== SIGNUP
  $('#signup').click(function () {
    console.log('USER SIGNING UP  ...');
    let username = $('#username').val();
    let password = $('#password').val();

    if (password === '' || username === '') {
      displayAuthError();
      return null
    }

    let user = {
      "username": username.toLowerCase(),
      "password": password.toLowerCase()
    };

    $.post('/auth/signup', user, function () {
      location = '/auth/login'
    });
  });

    //=====================================
    //== LOGIN
    $('#login').click(function () {
      console.log('USER LOGGING IN ...');
      let username = $('#username').val();
      let password = $('#password').val();

      if (password === '' || username === '') {
        displayAuthError();
        return null
      }

      let user = {
        "username": username.toLowerCase(),
        "password": password.toLowerCase()
      };

      $.post('/auth/login', user, function () {
        location = '/'
      });

    });


    $('#logout').click(function () {
      $.post('/auth/logout', function () {
        location.reload();  // RELOADS THE CURRENT WINDOW
      });
    });


    function displayAuthError() {
      setTimeout(function () {
        $('#err-message').css({'display': 'none'});
      }, 4000);

      $('#err-message').text('username and/or password cannot be empty');
      $('#err-message').css({'display': 'block'});
    }

    function displaySignupError() {
      setTimeout(function () {
        $('#err-message').css({'display': 'none'});
      }, 4000);

      $('#err-message').text('Username exist. Try a different username');
      $('#err-message').css({'display': 'block'});
    }


});