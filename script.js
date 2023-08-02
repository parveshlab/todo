


function checkFunction(callback){
event.preventDefault()
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let err = document.getElementById("err");

 if(pass.value=="12345" && email.value=="admin"){ 
    callback() 
 }else{ 
    err.innerText="INVALID PASS OR USERNAME"; 
 } 
} function validate(){ 
    window.location = "loginLogout.html"; 
}