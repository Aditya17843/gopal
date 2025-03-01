$(document).ready(function () {
  jQuery.validator.addMethod(
    "lettersonlys",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    },
    "Letters only please"
  );
  jQuery.validator.addMethod(
    "lettersonlys",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    },
    "Letters only please"
  );

  jQuery.validator.addMethod(
    "validateemail",
    function (value, element) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return reg.test(value);
    },
    "Please enter valid email"
  );

  $(".lpleadFormpopup").validate({
    onfocusout: function (element) {
      $(element).valid();
    },
    rules: {
      name: {
        required: true,
        lettersonlys: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      mobile: {
        required: true,
        maxlength: 13,
        minlength: 10,
      },

      course: {
        required: true,
      },
      highest_qualification: {
        required: true,
      },
      check: {
        required: true,
      },
    },
    messages: {
      fullname: {
        required: "Please enter name",
        lettersonlys: "Please enter letters only",
        minlength: "Enter minimum 3 characeters",
      },
      email: {
        required: "Please enter email",
        email: "Please enter valid email",
      },
      mobile: {
        required: "Please enter mobile",
        maxlength: "Please enter maximum 13 digits",
        minlength: "Please enter minimum 10 digits",
      },
      highest_qualification: {
        required: "Please select highest qualification",
      },
      course: {
        required: "Please select course",
      },

      check: {
        required: "Please check terms & conditions",
      },
    },
    submitHandler: function (form) {
      if ($("#otpvalidatepopup").val() == 1) {
        form.submit();
      } else {
        toastr.error("Please generate OTP");
        $(".submitBtnpopup").prop("disabled", true);
      }
    },
  });
});