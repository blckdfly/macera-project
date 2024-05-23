function signin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email.length === 0 || password.length === 0){
        alert("Email and Password must be filled")
    }
    else{
        alert("Sign In Successfully!")
        window.location.href = "index.html"
    }
}

function signup(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if(email.length === 0 || password.length === 0 || confirm_password.length === 0){
        alert("Email and Password must be filled");
    }
    else{
        alert("Sign Up Sucessfully!")
        window.location.href = "signIn.html"
    }
}