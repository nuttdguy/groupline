
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

  // $('#uploadForm').change(function(e) {
  //   e.preventDefault();
  //   console.log('THIS IS WORKING');
  //
  //   $("#status").empty().text("File is uploading...");
  //
  //   let $form    = $(e.target),
  //       formData = new FormData(),
  //       params   = $form.serializeArray(),
  //       files    = $form.find('[name="profileImg"]')[0].files;
  //
  //   $.each(files, function(i, file) {
  //     // Prefix the name of uploaded files with "uploadedFiles-"
  //     // Of course, you can change it to any string
  //     formData.append('uploadedFiles-' + i, file);
  //   });
  //
  //   $.each(params, function(i, val) {
  //     formData.append(val.name, val.value);
  //   });
  //
  //   console.log(formData);
  //
  //   $.ajax({
  //     url: $form.attr('action'),
  //     data: formData,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     type: 'POST',
  //     success: function(result) {
  //       // Process the result ...
  //     }
  //   });

    // $(this).ajaxSubmit({
    //   error: function (xhr) {
    //     status('Error: ' + xhr.status);
    //   },
    //   success: function (response) {
    //     console.log(response);
    //     $("#status").empty().text(response);
    //   }
    // });
  // });


  //======================================================
  // BEGIN == USER HELPER FUNCTIONS
  //======================================================


  function createUserProfile() {
    const username = $("#username").val();
    const password = $("#password").val();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const bio = $("#bio").val();
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
      $('#success-message').css({'display': 'none'});
    }, 2000);

    $('#success-message').text(data.success);
    $('#success-message').css({'display': 'block'});
  }

  // TODO :: add form validation for user profile
  function validateProfileForm() {


  }

  //======================================================
  // BEGIN == JQUERY SIMPLE UPLOAD
  //======================================================

  // $('input[type=file]').change(function() {
  //
  //   $(this).simpleUpload("/ajax/upload.php", {
  //
  //     allowedExts: ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif"],
  //     allowedTypes: ["image/pjpeg", "image/jpeg", "image/png", "image/x-png", "image/gif", "image/x-gif"],
  //     maxFileSize: 5000000, //5MB in bytes
  //
  //     start: function (file) {
  //       //upload started
  //
  //       this.block = $('<div class="block"></div>');
  //       this.progressBar = $('<div class="progressBar"></div>');
  //       this.cancelButton = $('<div class="cancelButton">x</div>');
  //
  //       /*
  //        * Since "this" differs depending on the function in which it is called,
  //        * we need to assign "this" to a local variable to be able to access
  //        * this.upload.cancel() inside another function call.
  //        */
  //
  //       var that = this;
  //
  //       this.cancelButton.click(function () {
  //         that.upload.cancel();
  //         //now, the cancel callback will be called
  //       });
  //
  //       this.block.append(this.progressBar).append(this.cancelButton);
  //       $('#uploads').append(this.block);
  //
  //     },
  //
  //     progress: function (progress) {
  //       //received progress
  //       this.progressBar.width(progress + "%");
  //     },
  //
  //     success: function (data) {
  //       //upload successful
  //
  //       this.progressBar.remove();
  //       this.cancelButton.remove();
  //
  //       if (data.success) {
  //         //now fill the block with the format of the uploaded file
  //         var format = data.format;
  //         var formatDiv = $('<div class="format"></div>').text(format);
  //         this.block.append(formatDiv);
  //       } else {
  //         //our application returned an error
  //         var error = data.error.message;
  //         var errorDiv = $('<div class="error"></div>').text(error);
  //         this.block.append(errorDiv);
  //       }
  //
  //     },
  //
  //     error: function (error) {
  //       //upload failed
  //       this.progressBar.remove();
  //       this.cancelButton.remove();
  //       var error = error.message;
  //       var errorDiv = $('<div class="error"></div>').text(error);
  //       this.block.append(errorDiv);
  //     },
  //
  //     cancel: function () {
  //       //upload cancelled
  //       this.block.fadeOut(400, function () {
  //         $(this).remove();
  //       });
  //     }
  //
  //   });
  // });

});

