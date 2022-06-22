function ValidateEmail(input){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(input.value.match(mailFormat)){
        // alert("Valid Email address!!");
        document.form.myEmail.focus();
        return true;
    }

    else{
        alert("Invalid Email address!!");
        document.form.myEmail.focus();
        return false;
    }
}