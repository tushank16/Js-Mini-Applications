/** ## Assignment 2:
* Generate Timer program using JavaScript where Time is decrementing from 5 mins to 0 seconds. 
As soon as it reaches to zero seconds we should get one alert message with message “Time out!” 
 */
//alert("connected");
var counter = 0;
var timeleft = 300;

function convertSeconds(s) {
  var min = Math.floor(s/60);
  var sec = s%60;
  return min + ":" + sec;
  
}

function setup(){

  var timer = document.getElementById("timer");
  var b = (timeleft - counter);
  timer.innerHTML=convertSeconds(b);
  
  function timeIt() {
  counter++;
  timer.innerHTML=convertSeconds(timeleft - counter);
  console.log(timer.textContent);
    if(counter == timeleft)
    {
      alert("Timer Ended!");
      clearInterval(t);
    }
  }
  var t = setInterval(timeIt, 1000);

}
