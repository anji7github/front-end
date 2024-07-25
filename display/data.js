let forms=document.getElementById("register");
forms.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(event);
    let username=event.target[0].value;
    let email=event.target[1].value;
    let password=event.target[2].value
    let confrompassword=event.target[3].value;
    console.log(username," ",  email," ",password," ",confrompassword)




    let users=username.match(/[A-Z]/) 
    console.log(users)
    let mail=email.match(/[@gamil.com]$/)
    console.log(mail)
     let passes=password.match(/^[A-Z]/)
    console.log(passes)
   if(users && username.length == 10){
    if(mail){
      if(password.length==6){
        if(confrompassword.length==password.length){
          window.location.href="./login.html"
          let mirchi={
            username:username,
            Email:email,
            password:password, 
          }
          let options={
            method:"POST",
            body:JSON.stringify(mirchi),
            headers:{
              "Content-type" : "application/json"
            }
            }
          
          fetch("http://localhost:3000/posts",options).then(val=>console.log(val))
        }else{
          alert("enter crct cnfrm pass")
        }
      }else{
        alert("enter pass")
      }
    }else{
      alert("enter a valid mail")
    }
   }else{
    alert("username length should 10 digit and fisrt letter should be captial")
}
});
