let containerDiv=document.getElementById("container")
let image=document.createElement("img")
let title=document.createElement("p")
let price=document.createElement("span")
let buy=document.createElement("button")

image.setAttribute("src","https://4.imimg.com/data4/RM/RK/ANDROID-42052609/product.jpeg")
image.style.width='200PX'
title.textContent="Cricket Bat"
price.textContent="5000"
buy.innerText="Buy Now"


containerDiv.style.display="inline-block";
containerDiv.style.border="2px solid black";
containerDiv.style.borderRadius="15px";
containerDiv.style.textAlign="center"
containerDiv.style.padding="50px"
containerDiv.style.background="linear-gradient(lightgreen,lightyellow)"
// containerDiv.style.backgroundColor="linear-gradient(orange,lightblue)";

// containerDiv.style.display="inline-block";

buy.style.backgroundColor="green"
buy.style.margin="20px"


containerDiv.append(image,title,price,buy)
// document.body.appendChild(containerDiv)

