document.getElementById('login-submit').addEventListener('click',function(){
    const emailField= document.getElementById('user-email')
    const userEmail=emailField.value
    // console.log(userEmail)
    const passwordField= document.getElementById('user-password')
    const userPassword= passwordField.value
    // cheek email and password
    if(userEmail=="suweb@gmail.com" && userPassword=='12345'){
        window.location.href="Banking.html"
    }
    
    
})

