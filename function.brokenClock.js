/*

MY GOAL: 

My bedside alarm clock has been broken for quite some time. Well, rather, the time is just behind. 

I want to create two functions: one that takes the input of the CORRECT time - the time displayed on my PC and phone - and converts it to the time displayed on my alarm clock. The second will do the opposite of this.

One challenge lies within the formatting of the alarm clock and the clocks on my PC/phone; the latter is displayed in 24-hour format, while my alarm clock is in 12-hour. I want to maintain these formats within the inputs and outputs of the functions.
So I'll also need to specify AM or PM when inputting and outputting the alarm clock time.

*/

function formatSmallHours(hours) { // Formats hours less than 10
    if (hours < 10) {
        hoursDisplay = `0${hours}`
    } else {
        hoursDisplay = `${hours}`
    }
    return hoursDisplay;
}

function addOneHour(hours) {
    hours++;
    if (hours > (23)) { 
        hours = (hours - 24); // Assign hours to the respective hour according to how large it is compared to 23
    }
    formatSmallHours(hours);
    return hours;
}

function formatSmallMinutes(minutes) { // Formats minutes less than 10
    if (minutes < 10) {
        hoursDisplay = `0${minutes}`
    } else {
        hoursDisplay = `${minutes}`
    }
    return hoursDisplay;
}

function addHourAndTwentyMinutes(hours, minutes) { // Self explanatory TEST FUNCTION
    formatSmallHours(hours);
    console.log(`The current time is: ${hoursDisplay}:00`);
    console.log('\n'); // Skip line
    console.log(`An hour and twenty minutes later...`);
    console.log('\n');
    addOneHour(hours); // Also formats
    console.log(`The time is now ${hoursDisplay}:00`); // Haven't gotten to the minutes yet
}

addHourAndTwentyMinutes(20);