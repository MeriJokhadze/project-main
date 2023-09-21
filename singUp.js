export function singVal()
{
     
    
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




}