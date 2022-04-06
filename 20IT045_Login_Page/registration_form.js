function validateHTMlform() {
    let form = document.StudentSignupForm;
    if (form.textnames.value == "") {
        alert("Enter Your First Name!");
        form.textnames.focus();
        return;
    }
    if (form.middlenames.value == "") {
        alert("Enter Your Middle Name!");
        form.textnames.focus();
        return;
    }

    if (form.lastname.value == "") {
        alert("Enter Your Last Name!");
        form.fathername.focus();
        return;
    }

    if (form.personal_address.value == "") {
        alert("Enter Your Personal Address!");
        form.personal_address.focus();
        return;
    }
    if ((StudentSignupForm.sex[0].checked == false) && (StudentSignupForm.sex[1].checked == false)) {
        alert("Choose Your Gender: Male or Female");
        return false;
    }
    if (form.City.value == "-1") {
        alert("Enter Your City!");
        form.City.focus();
        return;
    }
    if (form.Course.value == "-1") {
        alert("Enter Your Course!");
        return;
    }
    var email = form.emailid.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        alert("Enter your correct email ID")
        form.emailid.focus();
        return;
    }
    if (form.dob.value == "") {
        alert("Enter your DOB!");
        form.dob.focus();
        return;
    }
    if (form.mobileno.value == "" ||
        isNaN(form.mobileno.value) ||
        form.mobileno.value.length != 10) {
        alert("Enter your Mobile No. in the format 123.");
        form.mobileno.focus();
        return;
    }
    return (true);
}