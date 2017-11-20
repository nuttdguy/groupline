
$(document).ready(function() {


  //======================================================
  // BEGIN == USER ACTIVITY ROUTES
  //======================================================


  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#activityNew").submit(function(e) {
    e.preventDefault();
    let data = $('#activityNew');
    console.log(data[0].elements);

    // SUBMIT THE FORM
    $(this).ajaxSubmit({
      url: '/user/activity/new',
      type: 'POST',
      contentType: 'application/json',
      data: data,
      success: function (data) {
        displayMessage(data);
      }
    });

  });

  function validateForm() {
    let heading = $('#activityHeading').val();
    let category = $('#activityCategoryName option:selected').val();
    let start = $('#start').val();
    let end = $('#end').val();
    let minActor = $('#minActor').val();
    let maxActor = $('#maxActor').val();
    let summary = $('#summary').val();
    let detail = $('#detail').val();
    let location = $('#activityLocation').val();
    // let file = $('#activityFile');
    // let fileData = file.files[0];
    // let formData = new FormData();
    // formData('file', fileData);


    console.log(heading);
    console.log(category);
    console.log(start);
    console.log(end);
    console.log(minActor);
    console.log(maxActor);
    console.log(summary);
    console.log(detail);
    console.log(location);
    // console.log(file);
    // console.log(formData);


  }

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

