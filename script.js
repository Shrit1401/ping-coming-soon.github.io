// email validation

function validate(){
    var mail = document.getElementById("text").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(pattern.test(mail)){
        document.querySelector(".form span").innerHTML = "Done the work";
        document.querySelector(".form span").style.color = "#4f7df3";
        document.querySelector(".form").classList.add("done");
    }
    
    else{
        document.querySelector(".form span").innerHTML = "Please Provide a valid email address";
        document.querySelector(".form").classList.add("error");
        document.querySelector(".form span").style.color = "#ff5263";
    }

} 

