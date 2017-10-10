//function cambiar(){
    var xhr = new XMLHttpRequest();
 
    xhr.open("GET","https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyDrsuTvQ4ELMOBuV87DwQvmE3Nd0HQydjs",true);
    xhr.send();
 
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log = xhr.response;
        }
    }
//}