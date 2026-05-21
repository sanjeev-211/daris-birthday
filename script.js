console.log("Website Loaded Successfully");

function checkTyping() {

let input = document.getElementById("typingInput").value;

if(input.trim().toLowerCase() === "i am the birthday queen"){

document.getElementById("s1").classList.remove("active");

document.getElementById("s2").classList.add("active");

}else{

alert("Wrong text 😭 Try again");

}

}