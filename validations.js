const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password"); // corrected variable name
const cpassword = document.getElementById("cpassword"); // corrected variable name

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

var isValidName=false
var isValidEmail=false
var isValidPassword=false
var isValidCPassword=false

function validate() {
    let nameValue = uname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim(); // corrected variable name
    let cpasswordValue = cpassword.value.trim(); // corrected variable name
    isValidName=false
    isValidEmail=false
    isValidPassword=false
    isValidCPassword=false
    
    //Username check
    if (nameValue === '') {
        setError(uname, 'Username cannot be empty');
    } else if (nameValue.length < 3) {
        setError(uname, 'Username should be at least 3 characters');
    } else {
        setSuccess(uname);
        isValidName=true
    }

    //Email check

    if (emailValue === '') {
        setError(email, 'email cannot be empty');
    } else if (!emailCheck(emailValue)) {
        setError(email, 'enter valid email ID');
    } else {
        setSuccess(email);
        isValidEmail=true
    }

    //password check

    if (passwordValue === '') {
        setError(password, ' please enter password');
    } else if (passwordValue.length < 8) {
        setError(password, 'password should be at least 8 characters');
    } else {
        setSuccess(password);
        isValidPassword=true
    }

    //confirm poswordcheck

    if (cpasswordValue === '') {
        setError(cpassword, ' please reenter password');
    } else if (cpasswordValue.length < 8) {
        setError(cpassword, 'password should be at least 8 characters');
    } else {
        setSuccess(cpassword);
        isValidCPassword=true
    }

    if(isValidName && isValidEmail && isValidPassword && isValidCPassword){
        form.submit()
    }

    // Add similar validation for other fields (email, password, cpassword) if needed

    function setError(input, message) {
        let parent = input.parentElement; // corrected variable name
        parent.classList.remove('success');
        parent.classList.add('error');
        // You can also add an error message display here if needed
    }

    function setSuccess(input) {
        let parent = input.parentElement;
        parent.classList.remove('error');
        parent.classList.add('success');
    }
    function emailCheck(input){
        let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = emailReg.test(input)
        console.log(valid)
        return valid
    }
}

        