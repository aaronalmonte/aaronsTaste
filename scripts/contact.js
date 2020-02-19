function validateForm () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const additionalInfo = document.getElementById("info").value;
    const abcValid = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numValid = /^[0-9]+$/;

    if (name == "" || !name.match(abcValid)  ) {
        alert("Please enter a valid Name")
        document.getElementById("name").value = "";
        return false;
    }
    if (email == "" || !email.match(emailValid)) {
        alert("Please enter a valid Email")
        document.getElementById("email").value = "";
        return false;
    }
    if (!phone.match(numValid)) {
        alert("Please enter a valid Phone Number. Hyphen and parentheses are not needed.")
        document.getElementById("phone").value = "";
        return false;
    }
    if (additionalInfo == "") {
        alert("Please indicate details of inquiry in the text area.")
        return false;
    }

    alert("Congratulations all inputs are valid!");

    return false;
}