function showTime(){
    let date= new Date()
    let hours=date.getHours()
    var minutes=date.getMinutes()
    var seconds=date.getSeconds()

     format=setFormat(hours);
     hours=checkTime(hours);
     hours=setTime(hours);
     minutes=setTime(minutes);
     seconds=setTime(seconds);
     document.querySelector('#clock').innerHTML=`${hours}:${minutes}:${seconds} ${format}`


}

// funcion to check for am or pm
function setFormat(time){
    let format='AM';
    if(time>12){
        format='PM';
    }
    return(format)
    
}

function checkTime(t){
    
    if(t==0){
         t=12
    }
    if(t>12){
         t=t-12
    }
    return t
}
// function to get desired format
function setTime(_time){
    
    if(_time<10){
     _time="0"+ _time
    }
    return _time
}

// calling function showtime
setInterval(showTime,0)