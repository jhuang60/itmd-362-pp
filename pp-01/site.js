$('#inputform').on('submit', function(e){
  var email = $('#email').val();
  var phone = $('#phone').val();
  var birthday = $('#birthday').val();
  var status = document.getElementById("status");
  var fill = "Please fill in all the fields";
  var done = "Form submitted";
  var correctinput = false;

  e.preventDefault();

  if (email === '' || phone === '' || birthday === '') {
    status.textContent = fill;
    document.getElementById("status").style.color = 'red';
  }
  else {
    if(email.match(/.+@.+/)){
      $('#removeemail').remove();
      $('#emaillistitem').append('<li id="removeemail">correct email input</li>');
      correctinput = true;
    }
    else {
      $('#removeemail').remove();
      $('#emaillistitem').append('<li id="removeemail">Please verify your email input</li>');
      correctinput = false;
    }
    if (phone.match(/^[0-9]{11}$/)){
      $('#removephone').remove();
      $('#phonelistitem').append('<li id="removephone">correct phone input. </li>');
      correctinput = true;
    }
    else{
      $('#removephone').remove();
      $('#phonelistitem').append('<li id="removephone">Please verify that your phone number input has 10 characters</li>');
      correctinput = false;
    }
    if( correctinput === true){
      console.log("form submitted", email, phone, birthday);
      status.textContent = done;
      document.getElementById("status").style.color = 'green';
    }

  }

});
