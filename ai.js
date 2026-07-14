function sendQuestion(){

let q=document.getElementById("question").value;

document.getElementById("chat").innerHTML+=
"<p><b>You:</b> "+q+"</p>";

document.getElementById("chat").innerHTML+=
"<p><b>AI:</b> Processing...</p>";

}
