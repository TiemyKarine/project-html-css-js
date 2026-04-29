function login(){
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let login = document.getElementById("login");

    if(email.value ==="" || password.value ===""){
        alert("Login failed.Please try again.");
    }else{
        alert("Welcome!")
    }

    email.value = "";
    name.value= "";
    password.value= "";
    login.value= "";
    
}