$(document).ready(function () {


  //======================================================
  // BEGIN == UPLOAD ROUTES
  //======================================================

  // TODO :: VERIFY CORRECT FILE FORMAT, IMAGE TYPE

  $('#uploadFile').submit(function (e) {
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


});



