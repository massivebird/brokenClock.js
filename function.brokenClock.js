/*

MY GOAL: 

My bedside alarm clock has been broken for quite some time. Well, rather, the time is just behind. 

I want to create two functions: one that takes the input of the CORRECT time - the time displayed on my PC and phone - and converts it to the time displayed on my alarm clock. The second will do the opposite of this.

One challenge lies within the formatting of the alarm clock and the clocks on my PC/phone; the latter is displayed in 24-hour format, while my alarm clock is in 12-hour. I want to maintain these formats within the inputs and outputs of the functions.
So I'll also need to specify AM or PM when inputting and outputting the alarm clock time.

*/

const hoursArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] // index is equal to value

function formatSmallHours(hours) { // Formats hours less than 10
    if (hours < 10) {
        hoursDisplay = `0${hours}`
    } else {
        hoursDisplay = `${hours}`
    }
    return hoursDisplay;
}

function addHourAndTwentyMinutes(hours, minutes) { // Self explanatory
    formatSmallHours(hours);
    console.log(`The current time is: ${hoursDisplay}:00`)
    hours++;
    if (hours > (hoursArray.length - 1)); // If (hours > 23)
    hours = hoursArray.indexOf((hours - 23) - 1); // Assign hours to the respective hour according to how large it is compared to 23
}

addHourAndTwentyMinutes(5);