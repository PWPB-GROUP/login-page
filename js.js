
let loginListen = function(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(user === "admin" && pass === "admin"){
        alert("User dan Password Valid");
    }else{
        alert("Password Salah");
    }
}