 
    
// forms 

let formBox = document.getElementById("singupForm");

formBox.addEventListener("submit", function (element){
    element.preventDefault();

    let errors = {};

    // name

    let nameValue = document.getElementById("usernameinput").value;

    if (nameValue == ""){
        errors.username = "write your name ";
    }
    //surname

    let surnameValue = document.getElementById("surnameinput").value;

    if(surnameValue == ""){
        errors.surname = " write your surname";
    }

    //email

    let emaill = document.getElementById("email-input");
    
    function valemail(){

        let emailInput = document.getElementById("email-input").value;
        let textError = document.getElementById("email-error");
        let emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailInput.match(emailreg)){
            textError.innerText = "your email is vaild";
            textError.style.color = "green";
            emaill.style.border = "2px solid green";
        } else{
            textError.innerText = "your email is invaild";
            textError.style.color = "red";
            emaill.style.border = "2px solid red";
        }

        if (emailInput == ""){
            textError.innerText = " ";
        }
    }   

    emaill.addEventListener("keyup", valemail);

    
    
    //password

    let passwordValue = document.getElementById("passwordinput").value;
    let passwordValueTwo =document.getElementById("passwordtwoinput").value;


    if (passwordValue == ""){
        errors.password = "please create your password "
    }

    if (passwordValueTwo == ""){
        errors.passwordtwo = "please reapet your password"
    }

    if (passwordValue != passwordValueTwo){
        errors.passwordtwo = "passwords do not matches "
    }

    // gender

    let genderValue = document.getElementById("gender").value;

    if (genderValue === ""){
        errors.gender = "Please select an option.";
    }

    // check

    let checkValue =document.getElementById("agreecheck").checked;
    
    if (!checkValue){

        errors.agree = "you need to agree";

    }

    console.log(errors);

    formBox.querySelectorAll('.error-text').forEach(element => {
        element.innerText = "" ; 
    })

    for ( let item in errors){

        let textError = document.getElementById("error-"+ item)
        if (textError){
            textError.innerText = errors[item];
        }
    }
    
    if (Object.keys(errors).length == 0 ){
        formBox.submit();
    }

})


// // sing in 
// let singIn = document.getElementById("sing-in-btn");
// let cont = document.getElementById('reg-cont');
// let singInForm = document.getElementsByClassName('sing-in-div');
// function sing(){
//     cont.innerHTML = "";
//     singInForm.classList.add('active');
// }
// singIn.addEventListener('click', sing);




// show hide pssw

let passwordShow = document.getElementById("passwordinput");

let icon = document.getElementById("openeye");


function showPass(){
    
if (passwordShow.type == "password"){
    passwordShow.setAttribute('type', 'text');
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
} else{
    passwordShow.setAttribute('type', 'password');
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash")
}}    

icon.addEventListener('click', showPass );

