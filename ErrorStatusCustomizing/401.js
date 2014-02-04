var xhr = new XMLHttpRequest();
xhr.open("PUT","http://localhost:8081/provokeError401/");
xhr.send();
xhr.response;