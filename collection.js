var productc=document.getElementById("product")
var search=document.getElementById("search")
var productl=productc.querySelectorAll("div")

search.addEventListener("keyup",function(event){
   var enterv=event.target.value.toUpperCase()
   for(count=0;count<productl.length;count=count+1) {
     var productn=productl[count].querySelector("p").textContent
     if(productn.toUpperCase().indexOf(enterv)<0)
   {
     productl[count].style.display="none"
   }
   else {
     productl[count].style.display="block"
   }
  }
}
)