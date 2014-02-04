
var xhr = new XMLHttpRequest();
xhr.open("GET","http://127.0.0.1:8081/index.waPage/");
//var date = new Date(2013,02,01);
//var req = date.getTime();
xhr.setRequestHeader("If-Modified-Since", "Sat, 29 Oct 2013 19:43:31 GMT");
xhr.send();
xhr.responseText;