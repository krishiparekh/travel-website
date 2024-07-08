function switchdark() 
{
   var body = document.body;
   body.classList.toggle("darkmode");
   let button = document.getElementById('darkmode');
   if(button.innerHTML == "Light"){
    button.innerHTML = "Dark";
   }
   else{
    button.innerHTML = "Light"
   }
}