
$(document).ready(function() {


  //======================================================
  // BEGIN == USER PROFILE ROUTES
  //======================================================



  $("#updateProfile").click(function(e) {
    e.preventDefault();

    // USE HELPER TO CREATE JSON USER OBJECT
    let data = JSON.stringify(createUserProfile());
    console.log(data);

    $.ajax({
      url: '/user/update?_method=PUT',
      type: 'PUT',
      ContentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: {'data': data}
    }).done(function(data){
      console.log(data)
    }).fail(function (data) {
      console.log(data + 'failed');
    }).always(function () {
      console.log('always');
    })

  });

  function createUserProfile() {
    const username = $("#username").val();
    const password = $("#password").val();
    const firstName = $("#firstname").val();
    const lastName = $("#lastname").val();
    const bio = $("#bio").val();
    let userProfile = {
      'username': username,
      'password': password,
      'firstName': firstName,
      'lastName': lastName,
      'bio': bio
    };
    return userProfile;
  }


  // TODO :: add form validation for user profile
  function validateProfileForm() {


  }

});

