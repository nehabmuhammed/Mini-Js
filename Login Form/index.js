function Login() {
    const loginusername = document.getElementById('username').value;
    const loginpassword = document.getElementById('password').value;

    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
     

    if(loginusername === obj.username && loginpassword === obj.password){
        localStorage.setItem("currentName",obj.name);
        window.location.href = "/Home.html";
    } else{
        alert("Wrong Credentials");
    }

}
function signup(){
    const name = document.getElementById('name').value;
    const username1 = document.getElementById('username1').value;
    const password1 = document.getElementById('password1').value;

    let signupObj = {
        name: name,
        username : username1,
        password: password1
    };

    if(Object.values(signupObj).every(val => val.trim() !== "")){
        window.location.href ="login.html";
        const myJSON = JSON.stringify(signupObj);
        localStorage.setItem("testJSON", myJSON);
    }else{
        alert("Complete Sign Up");
    }


}