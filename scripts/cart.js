let data=JSON.parse(localStorage.getItem("cart_items"));

  var total=data.reduce(function(sum,el,index,arr){
    return sum+Number(el.price)
  })
 
  document.getElementById("cart_total").innerText=`cart_total=${total}`
     
  
  console.log(data)

  data.forEach(function(el,index){
    var div=document.createElement("div");
    div.setAttribute("class","item")

    var img=document.createElement("img");
    img.src=el.image;

    var name=document.createElement("p");
     name.innerText=el.name


     
    var price=document.createElement("p");
     price.innerText=el.price;

     var btn=document.createElement("button");
     btn.setAttribute("class","add_to_cart")
     btn.innerText="Remove";
     btn.addEventListener("click",function(){
         Remove(el,index);
     })
     div.append(img,name,price,btn);
     document.getElementById("cart").append(div)
  })

  function Remove(el,index){
    console.log(el,index);
    data.splice(index,1);
    localStorage.setItem("cart_items",JSON.stringify(data));
    window.location.reload();
  }