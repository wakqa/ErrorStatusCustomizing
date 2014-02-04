var xhr = new XMLHttpRequest();
xhr.open("POST","http://127.0.0.1:8081/echoBody/");
xhr.setRequestHeader("Content-Encoding","whatever");
var obj = JSON.stringify("whatever");
xhr.send(obj);
xhr.response;
