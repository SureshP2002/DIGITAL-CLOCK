let ampm=document.getElementById("ampm")
function displayTime()
{
    let dateTime=new Date()
    let hours=dateTime.getHours();
    let mins=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());
    if(hours>12)
    {
        ampm.innerHTML="PM"
        hours=hours-12
        
    }
    else{

    }
    document.getElementById("hrs").innerHTML=padZero(hours)
    document.getElementById("mins").innerHTML=padZero(mins)
    document.getElementById("sec").innerHTML=padZero(sec)

}

function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,1000)