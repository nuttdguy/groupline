
$(document).ready(function() {


  //======================================================
  // BEGIN == USER ACTIVITY ROUTES
  //======================================================


  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#activityNew").click(function(e) {
    e.preventDefault();

    // TODO :: ACTIVITY, ADD NEW
    let data = JSON.stringify(createUserProfile());

    $.ajax({
      url: '/user/activity',
      type: 'POST',
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
  // BEGIN == USER ACTIVITY UPLOAD ROUTES
  //======================================================

  // TODO :: VERIFY CORRECT FILE FORMAT, IMAGE TYPE
  // TODO :: ADD IMAGE UPLOAD FOR FORM

  // $('#uploadForm').submit(function(e) {
  //   e.preventDefault();
  //
  //   // VERIFY FILE-NAME IS NOT EMPTY
  //   let file = $('#fileToUpload').val();
  //   if (file === undefined || file === '') {
  //     let data = {"fail": "Select a file to upload"};
  //     displayMessage(data);
  //
  //   } else {
  //     // SUBMIT THE FORM AND FILE
  //     $(this).ajaxSubmit({
  //       contentType: 'application/json',
  //       success: function (data) {
  //         displayMessage(data);
  //       }
  //     });
  //   }
  //
  //   return false
  // });


  //======================================================
  // BEGIN == USER HELPER FUNCTIONS
  //======================================================


  function displayMessage(data) {
    setTimeout(function () {
      $('#fileToUpload').val('');
      $('#success-message').css({'display': 'none'});
    }, 4000);

    $('#success-message').text(data.success);
    $('#success-message').text(data.fail);
    $('#success-message').css({'display': 'block'});
  }


});

