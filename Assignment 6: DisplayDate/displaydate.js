function rendertime() {
  var date = new Date();
  var day = date.getDay();
  var dt = date.getDate();
  var year = date.getFullYear();
  var month1 = date.getMonth();
  var hour = date.getHours();
  var min =  date.getMinutes();
  var sec = date.getSeconds();
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month =montharray[month1];
  var weak = week[day];
  var time = weak +" "+ dt +" "+ month +" "+ year +" "+hour + ":" + min + ":" + sec;
  //console.log( time);
  var displayelement = document.getElementById("display");
  displayelement.innerText = time;
}
setInterval(rendertime, 1000);
