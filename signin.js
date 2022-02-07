document.getElementById("login").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    location.replace("main.html")
  }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function validateemail(){  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
      }  
    }