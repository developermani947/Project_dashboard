async function weather(){
var city=searchbox.value;
const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0717291aedde3de0563a4441f077519b&q=${city}`;
var data=await fetch(apiurl);
var res=await data.json();
document.querySelector('#weather h1').innerHTML=Math.round(res.main.temp)+"℃";
document.querySelector('#weather h3').innerHTML=res.name;
humidity.innerHTML=res.main.humidity+"%";
wind.innerHTML=res.wind.speed+"km/h"
document.getElementById('weather').style.display="block";
}
