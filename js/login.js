let users = [
    {
        username : "albertoDaw",
        pass : "albertoDaw"
    },
    {
        username: "beatrizDaw",
        pass: "beatrizDaw"
    },
    {
        username: "abrahamDaw",
        pass: "abrahamDaw"
    },
    {
        username: "manuelDaw",
        pass: "manuelDaw"
    }
]



//Inputs
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector(".form__button");



//Output
const output = document.createElement("span");
output.setAttribute("class","error")


const login_validate=(users,username,password)=>{ debugger;
    let exist = false;
    for(let user of users){
        if(user.username === username.value && user.pass === password.value) exist=true;
    }
    if(exist){
        return true;

    }else{
        output.innerText = "*El usuario o la contraseña no coinciden";
        button.insertAdjacentElement("afterend",output);
        return false;
    };
}

