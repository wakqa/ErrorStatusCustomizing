
var xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:8081/4xx.html");
xhr.setRequestHeader("ACCEPT-ENCODING","whaterver");
xhr.send();
xhr.response;