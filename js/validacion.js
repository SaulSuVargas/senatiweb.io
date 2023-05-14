function login(){
    var ID = document.getElementById("ID").value;
    var PASS = document.getElementById("PASS").value

    if(ID =="DELEGADA" && PASS=="clave123"){
        alert("Bienvenido"+" "+ID)
        window.location="/SINFO 1.0/sinfo.html";
    }else if(ID =="SUSANA" && PASS=="clave1234"){
        alert("Bienvenido"+" "+ID)
        window.location="/SINFO 1.0/sinfo.html";
    }else if(ID =="HANS" && PASS=="12345678"){
        alert("Bienvenido"+" "+ID)
        window.location="/SINFO 1.0/sinfo.html";
    }else{
        alert("Usuario no existente");
    }
}