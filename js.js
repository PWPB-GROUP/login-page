let loginListen = function(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(user === "" || pass === ""){
        alert("User atau Password Kosong");
    }else if(user === "admin" && pass === "admin"){
        alert("User dan Password Valid");
    }else{
        alert("User atau Password Salah");
    }
}
