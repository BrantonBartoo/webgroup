// days of the week 



var user_display = document.getElementById('day_if-else');
var switch_display = document.getElementById('day_switch');


do {
    var day_of_week = Number(window.prompt("Enter day of the week (1-7): "));
} while (day_of_week < 0 || day_of_week > 8)



/* using if else lader */
if (day_of_week == 1)
    user_display.innerHTML = 'Sunday';

else if (day_of_week == 2)
    user_display.innerHTML = 'Monday';

else if (day_of_week == 3)
    user_display.innerHTML = 'Tuesday';

else if (day_of_week == 4)
    user_display.innerHTML = 'Wednesday';

else if (day_of_week == 5)
    user_display.innerHTML = 'Thursday';

else if (day_of_week == 6)
    user_display.innerHTML = 'Friday';

else if (day_of_week == 7)
    user_display.innerHTML = 'Saturday';



