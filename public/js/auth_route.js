$(document).ready(function () {

  // CLIENT-SIDE JQUERY / AJAX ROUTES FOR HANDLING POST, PUT, DELETE REQUESTS

  //======================================================
  // BEGIN == AUTHENTICATION ROUTES
  //======================================================

  //=====================================
  //== SIGNUP

  $('#signup').click(function (e) {
    e.preventDefault();
    console.log('USER SIGNING UP  ...');
    let username = $('#username').val();
    let password = $('#password').val();

    if (password === '' || username === '') {
      displayMessage({fail: 'username and/or password cannot be empty'});
    }

    let data = {
      "username": username.toLowerCase(),
      "password": password.toLowerCase()
    };

    $.ajax({
      url: '/auth/signup',
      type: 'POST',
      ContentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 30000,
      data: data
    }).done(function(data){
      location = '/auth/login'
    }).fail(function (data) {
      data = {fail: 'username exists'};
      displayMessage(data);
    }).always(function () {
      console.log('always');
    });

  });

  //=====================================
  //== LOGIN

  $('#login').click(function (e) {
    e.preventDefault();
    console.log('USER LOGGING IN ...');
    let username = $('#username').val();
    let password = $('#password').val();

    if (password === '' || username === '') {
      displayMessage({fail: 'username and/or password cannot be empty'});
      return null
    }

    let data = {
      "username": username.toLowerCase(),
      "password": password.toLowerCase()
    };

    $.ajax({
      url: '/auth/login',
      type: 'POST',
      ContentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 30000,
      data: data
    }).done(function(data){
      location = '/'
    }).fail(function (data) {
      console.log(data);
      data = {fail: 'Something happened'};
      displayMessage(data);
    }).always(function () {
      console.log('always');
    });

  });


  $('#logout').click(function () {
    $.post('/auth/logout', function () {
      location.reload();  // RELOADS THE CURRENT WINDOW
    });
  });


  //======================================================
  // BEGIN == ERROR MESSAGES
  //======================================================

  function displayMessage(data) {
    setTimeout(function () {
      $('#fileToUpload').val('');
      $(':input').val('');
      $('#message').css({'display': 'none'});
    }, 4000);

    $('#message').text(data.success);
    $('#message').text(data.fail);
    $('#message').css({'display': 'block'});
  }


});