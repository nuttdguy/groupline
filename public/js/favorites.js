$(document).ready(function () {
    $('.add-favorite').submit(function (e) {
        e.preventDefault();
        let activityId = $(this).data('id');
        console.log(activityId)

        $.ajax({
          url: '/user/favorite/' + activityId,
          type: 'POST'
        }).done(() => {
          successMessage("Saved!")
          location = '/explore/' + activityId
        }).fail(() => {
          failMessage("Failed!")
        });

    });

    function successMessage(msg) {
      setTimeout(function () {
        $(':input').val('');
        $('#success').css({'display': 'none'});
      }, 4000);
      console.log("SUCCESS")
      $('#success').text(msg);
      $('#success').css({'display': 'block'});
    }

    function failMessage(msg) {
      setTimeout(function () {
        $(':input').val('');
        $('#failure').css({'display': 'none'});
      }, 4000);
      console.log("NOT SUCCESS")
      $('#failure').text(msg);
      $('#failure').css({'display': 'block'});
    }

});
