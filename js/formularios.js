
//Inputs:
const username = document.querySelector('input[name="username"]');
const email = document.querySelector('input[name="email"]');
const pass = document.querySelector('input[name="password"]');
const repeatPass = document.querySelector('input[name="rpassword"]');
const button = document.querySelector(".form__button");
//Label:

const label_username = document.querySelectorAll(".form__label")[0];
const label_email = document.querySelectorAll(".form__label")[1];
const label_pass = document.querySelectorAll(".form__label")[2];
const label_confirm = document.querySelectorAll(".form__label")[3];

//Errors:
const usernameE = document.createElement("span");
usernameE.setAttribute("class","error");
const emailE = document.createElement("span");
emailE.setAttribute("class","error");
const passE = document.createElement("span");
passE.setAttribute("class","error");
const repeatPassE = document.createElement("span");
repeatPassE.setAttribute("class","error");
const buttonE = document.createElement("span");
buttonE.setAttribute("class","error");


//Regex:
const usernameRegex = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
const emailRegex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;



//function to clean an error using the example of moodle.
const focus=(input,error)=> {
    if (input.classList.contains("invalid")) {
        input.classList.remove("invalid");
        error.remove();
    }
}

/*validate username:
    - It only contains alphanumeric characters.
    - The underscore and period cannot be at the end or beginning of a username.
    - The underscore and period cannot be not next to each other.
    - The underscore or period cannot be used multiple times in a row.
    - The number of characters must be between 8 and 20.

 */

const validate_username=(username,usernameE,usernameRegex)=>{
    if (usernameRegex.test(username.value)){
        return true;
    }
    else if(username.value === "" ){
        username.classList.add("invalid");
        usernameE.innerText = "* El nombre de usuario no puede estar vacio.";
        label_username.insertAdjacentElement("afterend",usernameE);
    }
    else{
        username.classList.add("invalid");
        usernameE.innerText = '* Nombre de usuario no valido.';
        label_username.insertAdjacentElement("afterend",usernameE);
    }

}

const usernameFocus =(username,usernameE)=>{
    return focus(username,usernameE);
}

/*validate email:
    - Control the basics that an email must have to work (alfanumeric@alfanumeric.dom) */

const validate_email = (email,emailE,emailRegex) => {

    if(emailRegex.test(email.value)){
        return true;
    }
    else if(email.value===""){
        email.classList.add("invalid");
        emailE.innerText = "*El email no puede estar vacio.";
        label_email.insertAdjacentElement("afterend",emailE);
    }
    else{
        email.classList.add("invalid");
        emailE.innerText = '*Email no valido.';
        label_email.insertAdjacentElement("afterend",emailE);
    }

}

const emailFocus=(email,emailE)=>{
    return focus(email,emailE);
}

/*Validate password:
    - Min 8 chars;
    - Min a capital letter;
    - Min a lowerCase letter;
    - Min a number;
 */

const validate_password=(pass, passE, passRegex)=>{
    if(passRegex.test(pass.value)){
        return true;
    }
    else if(pass.value===""){
        pass.classList.add("invalid");
        passE.innerText = "*La contraseña no puede estar vacia.";
        label_pass.insertAdjacentElement("afterend",passE);
    }
    else if(pass.value.length<8){
        pass.classList.add("invalid");
        passE.innerText = '*La contraseña debe tener minimo 8 caracteres.';
        label_pass.insertAdjacentElement("afterend",passE);
    }
    else{
        pass.classList.add("invalid");
        passE.innerText = '*La contraseña debe contener numeros, mayusculas y minusculas.';
        label_pass.insertAdjacentElement("afterend",passE);
    }
}

const passwordFocus =(pass,passE)=>{
    return focus(pass,passE);
}

//Validate the password confirmation:

const validate_confirm_password =(pass,repeatPass,repeatPassE)=>{
    if(pass.value !== repeatPass.value){
        repeatPass.classList.add("invalid");
        repeatPassE.innerText = "*Las contraseñas no coinciden."
        label_confirm.insertAdjacentElement("afterend",repeatPassE);
    }
    else if(repeatPass.value === ''){
        repeatPass.classList.add("invalid");
        repeatPassE.innerText = "*La contraseña no puede estar vacia."
        label_confirm.insertAdjacentElement("afterend",repeatPassE);
    }
    else return true;
}

const repeatPasswordFocus=(repeatPass,repeatPassE)=>{
    return focus(repeatPass,repeatPassE);
}


const validate_submit =()=>{

    let error = false;
    if(!validate_username(username,usernameE,usernameRegex)){
        error = true;
    }
    if(!validate_email(email,emailE,emailRegex)){
        error = true;
    }
    if(!validate_password(pass,passE,passRegex)){
        error = true;
    }
    if(!validate_confirm_password(pass,repeatPass,repeatPassE)){
        error = true;
    }
    if(!error){
       return true;}

    return false;

}

//Events onblur:
username.addEventListener("blur",()=>{validate_username(username,usernameE,usernameRegex)});
email.addEventListener("blur",()=>{validate_email(email,emailE,emailRegex)});
pass.addEventListener("blur",()=>{validate_password(pass,passE,passRegex)});
repeatPass.addEventListener("blur",()=>{validate_confirm_password(pass,repeatPass,repeatPassE)});

//Events onfocus:
username.addEventListener("focus",()=>{usernameFocus(username,usernameE)});
email.addEventListener("focus",()=>{emailFocus(email,emailE)});
pass.addEventListener("focus",()=>{passwordFocus(pass,passE)});
repeatPass.addEventListener("focus",()=>{repeatPasswordFocus(repeatPass,repeatPassE)});

