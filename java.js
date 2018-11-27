function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["mname"].value;
    if (y == "") {
        alert("Middle name must be filled out");
        return false;
    }
    
    var z = document.forms["myForm"]["sname"].value;
    if (z == "") {
        alert("Surname must be filled out");
        return false;
    }
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }

    var a = document.forms["myForm"]["mobile"].value;
    if (a == "") {
        alert("Phone number must be filled out");
        return false;
    }
     if (a.length!=0 && a.length<10 || isNaN(a)) {
        alert("Phone number must be 10 digits and a number");
        return false;
    }
    
}