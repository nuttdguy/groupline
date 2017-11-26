
$(document).ready(function () {


  //======================================================
  // BEGIN == USER ACTIVITY ROUTES
  //======================================================

  // METHOD [POST] == NEW ACTIVITY LISTING
  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#activityNew").submit(function(e) {
    e.preventDefault();

    let data = validateForm($(this));

    $.ajax({
      url: '/user/activity/new',
      type: 'POST',
      contentType: 'application/json',
      data: data,
      success: function (data) {
        // location = '/user/activity/new';
        displayMessage(data);
      }
    })

  });

  // METHOD [PUT] == UPDATE EXISTING ACTIVITY
  $("#activityUpdate").submit(function(e) {
    e.preventDefault();

    let data = validateForm($(this));
    let id = $('#activityId').val();
    console.log(id);
    let url = '/user/activity/'+id+'/update?_method=PUT';

    $.ajax({
      url: url,
      type: 'PUT',
      contentType: 'application/json',
      data: data,
      success: function (data) {
        displayMessage(data);
        window.location.href = data.view;
      }
    });

  });


  // METHOD [POST] == NEW ACTIVITY LISTING
  // TODO :: ADD VALIDATION TO PREVENT EMPTY FIELD ON UPDATE
  $("#activityDelete").click(function(e) {
    e.preventDefault();

    let id = $(this)[0].getAttribute('placeholder');
    console.log(id);
    let url = '/user/activity/' + id + '/delete?_method=DELETE';

    $.ajax({
      url: url,
      type: 'DELETE',
      contentType: 'application/json',
      success: function (data) {
        window.location.href = data.view;
        displayMessage(data);
      }
    })

  });

  // HELPER FUNCTION ==> TRANSFER FORM VALUES INTO JSON OBJECT
  function validateForm() {

    let title = $('#title').val();
    let category = $('#categoryName option:selected').val();
    let start = $('#start').val();
    let end = $('#end').val();
    let minActor = $('#minActor').val();
    let maxActor = $('#maxActor').val();
    let summary = $('#summary').val();
    let detail = $('#detail').val();
    let address = $('#activityLocation').val();

    let data = {
      "title": title,
      "category": category,
      "startDate": start,
      "endDate": end,
      "minActor": minActor,
      "maxActor": maxActor,
      "summary": summary,
      "detail": detail,
      "address": address
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
      $('form')[0].reset();
      $('#message').css({'display': 'none'});
    }, 4000);

    $('#message').text(data.success);
    $('#message').text(data.fail);
    $('#message').css({'display': 'block'});
  }


});

