let url=`https://grocery-masai.herokuapp.com/items`;
fetch(url).then(function(res){
  return res.json()
}).then(function(res){
  console.log(res.data);
  Append(res.data)
})




function Append(data)
{
  var container=document.getElementById("groceries");


  data.forEach(function(el){
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
     btn.innerText="Add To Cart";
     btn.addEventListener("click",function(){
         myfun(el);
     })
     div.append(img,name,price,btn);
     container.append(div);
  })

  arr=JSON.parse(localStorage.getItem("cart_items"))||[];

  function myfun(el)
  {
    obj={
       image:el.image,
       name:el.name,
       price:el.price,

    };
    arr.push(obj);
    localStorage.setItem("cart_items",JSON.stringify(arr))

    // var wal=document.getElementById("wallet").value;
    // if(el.price<wal)
    // {
    //     alert("Order Added To Cart")
    // }

  }

  var cart=document.getElementById("cart");
  cart.style="cursor:pointer";
  cart.addEventListener("click",function(){
      window.location.href="/cart.html";
  })

}