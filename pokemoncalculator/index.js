function signUp(){
    const name = document.getElementById('name').value;
    const username1 = document.getElementById('username').value;
    const password1 = document.getElementById('password').value;

    const signObj = {
        name:name,
        username:username1,
        password:password1
    };

    if(Object.values(signObj).every(val => val.trim() !== "")){
        window.location.href = "login.html";
        const myJSON = JSON.stringify(signObj);
        localStorage.setItem("testJSON",myJSON);
    }else{
        alert("Fill The Credentials")
    }

    
    console.log(signObj);
}
function login(){
    const uname = document.getElementById('uname').value;
    const pass = document.getElementById('pass').value;

    if(uname === "" && pass === ""){
        alert("Enter The credentials");
    }


    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    console.log(obj);

    
    if(uname === obj.username && pass ===obj.password){
        localStorage.setItem("currentName",obj.name);
        window.location.href = "Home.html";
    }else {
        alert("Incorrect Credentials");
    }


}