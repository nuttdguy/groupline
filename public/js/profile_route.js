
$(document).ready(function() {


  //======================================================
  // BEGIN == USER PROFILE ROUTES
  //======================================================


  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#updateProfile").click(function(e) {
    e.preventDefault();

    let data = JSON.stringify(createUserProfile());

    $.ajax({
      url: '/user/update?_method=PUT',
      type: 'PUT',
      ContentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 30000,
      data: {'user': data}
    }).done(function(data){
      displayMessage(data);
    }).fail(function (data) {
      console.log(data + ' == failed');
    }).always(function () {
      console.log('always');
    })
  });


  //======================================================
  // BEGIN == UPLOAD ROUTES
  //======================================================

  // TODO :: VERIFY CORRECT FILE FORMAT, IMAGE TYPE

  $('#uploadForm').submit(function(e) {
    e.preventDefault();

    // VERIFY FILE-NAME IS NOT EMPTY
    let file = $('#fileToUpload').val();
    if (file === undefined || file === '') {
      let data = {"fail": "Select a file to upload"};
      displayMessage(data);

    } else {
      // SUBMIT THE FORM AND FILE
      $(this).ajaxSubmit({
        contentType: 'application/json',
        success: function (data) {
          displayMessage(data);
        }
      });
    }

    return false
  });


  //======================================================
  // BEGIN == USER HELPER FUNCTIONS
  //======================================================

  function createUserProfile() {
    const username = $("#username").val();
    const password = $("#password").val();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const bio = $("#bio").val();

    if (username === '' || username === null || username === undefined) {
      let data = { "fail": "Username cannot be empty"};
      displayMessage(data);
      return null;
    }

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
      $('#success-message').css({'display': 'none'});
    }, 4000);

    $('#success-message').text(data.success);
    $('#success-message').text(data.fail);
    $('#success-message').css({'display': 'block'});
  }

  // TODO :: add form validation for user profile
  function validateProfileForm() {

  }


});

