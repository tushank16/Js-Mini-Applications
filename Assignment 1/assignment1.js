/*
* Write a script to which will take name as a input from user and display greeting message to the user according time of the day.
* If time is less than or equal to 12PM then Good Morning with User name
* If time is between to 12 PM to 3 PM then Good After noon with User name.
* And if time is greater than 3 PM then Good Evening with User name.
*/ 
var nm = prompt("Enter Your Name");
var time = new Date();
var h = Number(time.getHours());
var m = Number(time.getMinutes());
var h1 = document.querySelector("h1");
var textInput = document.querySelector("input");
var h2 = document.querySelector("h2"); 
h2.textContent = nm;

if(h>6 & m>1)
{
    h1.textContent = "Good Morning";
    if(h>12 & m>1)
    {
        h1.textContent = "Good Afternoon";
        if(h>15 & m>1)
        {
            h1.textContent = "Good Evening";
        }
    }
}


textInput.addEventListener("change", function(){
    h2.textContent = textInput.value;
});

