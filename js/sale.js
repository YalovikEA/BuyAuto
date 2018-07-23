$("form").submit(function () {

  var clikedForm = $(this); // Select Form

  if (clikedForm.find("[name='mobile_no']").val() == '') {
    alert('Enter Valid mobile number');
    return false;
  }
  if (clikedForm.find("[name='email_id']").val() == '') {
    alert('Enter  valid email id');
    return false;
  }