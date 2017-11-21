
$(document).ready(function () {


  //======================================================
  // BEGIN == USER ACTIVITY ROUTES
  //======================================================

  // METHOD [POST] == SUBMIT THE ACTIVITY LISTING
  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#activityNew").submit(function(e) {
    e.preventDefault();
    let data = validateForm($(this));

    // SUBMIT THE FORM
    $.ajax({
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
    let title = $('#title').val();
    let category = $('#categoryName option:selected').val();
    let start = $('#start').val();
    let end = $('#end').val();
    let minActor = $('#minActor').val();
    let maxActor = $('#maxActor').val();
    let summary = $('#summary').val();
    let detail = $('#detail').val();
    let location = $('#activityLocation').val();

    let data = {
      "title": title,
      "category": category,
      "startDate": start,
      "endDate": end,
      "minActor": minActor,
      "maxActor": maxActor,
      "summary": summary,
      "detail": detail,
      "location": location
    };

    return JSON.stringify(data);

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
      $('#message').css({'display': 'none'});
    }, 4000);

    $('#message').text(data.success);
    $('#message').text(data.fail);
    $('#message').css({'display': 'block'});
  }


});

