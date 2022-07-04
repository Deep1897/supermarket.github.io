var check= document.getElementById("submit");
check.addEventListener("click",function(){

  alert("Your order is confirmed ");
  
  setTimeout(function(){
    alert("Your order is being Packed")
  },3000)

  setTimeout(function(){
    alert("Your order is in transit")
  },8000)

  setTimeout(function(){
    alert("Your order is out for delivery")
  },10000)


  setTimeout(function(){
    alert("Order delivered")
  },12000)
 

})