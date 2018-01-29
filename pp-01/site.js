
  $('#inputform').on('submit', function(e){
    var email = $('#email').val();
    var phone = $('#phone').val();
    var birthday = $('#birthday').val();
    var status = document.getElementById("status");
    var fill = "Please fill in all the fields";
    var done = "Form submitted";

    e.preventDefault();

      if (email === '' || phone === '' || birthday === '') {
        status.textContent = fill;
        document.getElementById("status").style.color = 'red';

        } else{
          console.log("form submitted", email, phone, birthday);
          status.textContent = done;
          document.getElementById("status").style.color = 'green';
        }

  });
