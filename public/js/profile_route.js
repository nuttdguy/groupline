
$(document).ready(function() {

  const USER_BASE_URL = '/user';

  //======================================================
  // BEGIN == USER PROFILE ROUTES
  //======================================================


  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#updateProfile").click(function(e) {
    e.preventDefault();

    let data = JSON.stringify(createUserProfile());

    $.ajax({
      url: USER_BASE_URL + '/update?_method=PUT',
      type: 'PUT',
      ContentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 30000,
      data: data,
      success: function(data) {
        displayMessage(data);
      },
      fail: function(data) {
        displayMessage(data);
      }
    })

    //   .done(function(data){
    //   displayMessage(data);
    // }).fail(function (data) {
    //   console.log(data + ' == failed');
    // }).always(function () {
    //   console.log('always');
    // })
  });


  //======================================================
  // BEGIN == USER HELPER FUNCTIONS
  //======================================================

  function isFormValid(username, password) {
    if (username === '' || username === null || username === undefined) {
      let data = { "fail": "Username cannot be empty"};
      displayMessage(data);
      return null;
    }
    return true
  }

  function createUserProfile() {
    const username = $("#username").val();
    const password = $("#password").val();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const bio = $("#bio").val();

    if (isFormValid()) {

      let userProfile = {
        'username': username,
        'password': password,
        'firstName': firstname,
        'lastName': lastname,
        'bio': bio
      };
      return userProfile;
    }

    function displayMessage(data) {
      setTimeout(function () {
        $('#fileToUpload').val('');
        $('#message').css({'display': 'none'});
      }, 4000);

      $('#message').text(data.success);
      $('#message').text(data.fail);
      $('#message').css({'display': 'block'});
    }
  }

});

