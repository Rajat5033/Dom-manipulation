let a = document.querySelector(".one");
console.log(a)
let b = document.querySelectorAll("#new");
console.log(b)
let c = document.getElementById("#new");
console.log(c)
let d = document.getElementsByClassName("one")
console.log(d)
let e = document.getElementsByTagName("p")
console.log(e)

let para = document.createElement("h2");
para.textContent="hello world";
para.innerHTML="<button>hi</button>";
console.log(para)

a.prepend(para)

let para1 = document.querySelector("#new2")
para1.remove()





