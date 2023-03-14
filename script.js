var istop= true;// my timer is stop
var sec=0;
var min=0;
var hr=0;

//create function for satrt button
function start(){
    if(istop==true){
        istop=false;// my timer is start
        timer();
    }
}
// create a timer function
function timer(){
if(istop==false){// my timer is start
sec++;// 60sec=1min
// covert string to integer
sec= parseInt(sec);
min= parseInt(min);
hr= parseInt(hr); 
// i check it all the condition releted to stopwatch
if(sec==60){
    sec=0;
    min++;
}
if(min==60){
    min=0;
    hr++;
}
// it is check it if(sec>10) then add 0 for sec
if(sec<10){
    sec= "0"+sec;
}
// it is check it if(sec>10) then add 0 for min
if(min<10){
    min= "0"+min;
}
// it is check it if(sec>10) then add 0 for hr
if(hr<10){
  hr  = "0"+hr;
}



startTimer.innerHTML= hr+":"+min+":"+sec;
setTimeout("timer()",1000);//1000ms=1sec
}

}

//create the function for stop button
function stop(){
 istop=true;       //my timer is stop

}
//create the function for reset button
function reset(){
    istop==true;// my timer is stop
    sec=0;
    min=0;
    hr=0;
    startTimer.innerHTML="00:00:00";
}
