function validate(){
    var name = document.getElementById("name");
    var phoneno = document.getElementById("PhoneNo");
    var password = document.getElementById("password");
    
    if(name.value.trim() == "")
    {
        alert("Please enter username");
        return false;
    }
    else if(phoneno.value.trim()=="" ||  phoneno.value.trim().length>10 || phoneno.value.trim().length<10)
    {
        alert("Please enter phone number of 10 digits");
        return false;
    }
   
    else if(password.value.trim()=="")
    {
        alert("Please enter password");
        return false;
    }
    else if(password.value.trim().length>6 || password.value.trim().length<6)
    {
        alert("Please enter password of 6 digit");
        return false;
    }
    else {
        return  true;
      } 
}