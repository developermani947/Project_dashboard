//window.alert("hello")
function wc()
{
var d=new Date();
var ind=d.toLocaleString(`en-US`,{
timeZone:'Asia/Kolkata'
});
var chi=d.toLocaleString(`en-US`,{
timeZone:'Asia/Shanghai'
})
var ame=d.toLocaleString(`en-US`,{
timeZone:'America/New_York'
})
document.getElementById('india').innerHTML=ind.split(',')[1];
document.getElementById('china').innerHTML=chi.split(',')[1];
document.getElementById('america').innerHTML=ame.split(',')[1];

}
wc()
setInterval(()=>{
wc()
},1000)