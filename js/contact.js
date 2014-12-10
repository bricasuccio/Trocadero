$(function() {
$('#first-name').focus();

$('.submit').on('click', function () {
    clearValidation();
    validateFields();
});
function clearValidation() {
    $('.form-error').remove();
}

function validateFields() {
    var inputs = $('input[type=text]'),
        errors = [];
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i],
            error = '',
            validationType = $(input).data('validate'),
            inputValue = $(input).val();


        if (validationType == 'email') {
            var validEmail = validateEmail(inputValue);
            if (!validEmail) {
                error = $(input).data('error-message');
            }
        }
        if (validationType == 'not-blank') {
            if (inputValue === '') {
                error = $(input).data('error-message');
            }
        }


        errors.push(error);


    }

    for (var e = 0; e < errors.length; e++) {
        $('.form-errors').append('<li class="form-error">' + errors[e] + '</li>');
    }
    if (errors.length > 0){

      $(".submit").on('click', function (){
        $('.flip-container').addClass("flip-go");
        // store the value of the text box's
        // set the text of .asf (your span in the html)
        // to the value of the variable you just made

        var name = $('#name').val();
        var email = $('#emailbox').val();

        $('.name').text(name);
        $('.email').text(email);

        setTimeout(function () {
          $('.flip-container').removeClass("flip-go");
        }, 10000);
      });
    }
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



$(".message").on('keyup', function(){

    $("#count").text("Characters left: " + (150 - $(this).val().length));
    var color = '#000';
    if ($(this).val().length >= 130) {
      color = "red";
    }
    $("#count").css({"color": color});


});


});
