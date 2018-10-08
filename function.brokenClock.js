/*

MY GOAL: 

My bedside alarm clock has been broken for quite some time. Well, rather, the time is just behind. 

I want to create two functions: one that takes the input of the CORRECT time - the time displayed on my PC and phone - and converts it to the time displayed on my alarm clock. The second will do the opposite of this.

One challenge lies within the formatting of the alarm clock and the clocks on my PC/phone; the latter is displayed in 24-hour format, while my alarm clock is in 12-hour. I want to maintain these formats within the inputs and outputs of the functions.
So I'll also need to specify AM or PM when inputting and outputting the alarm clock time.

I have discovered that my alarm clock is behind by 4 hours and 13 minutes

*/

function formatSmallHours(hours) { // Formats hours less than 10
    if (hours < 10) {
        hoursDisplay = `0${hours}`
    } else {
        hoursDisplay = `${hours}`
    }
    return hoursDisplay;
};

function subtractFourHours(hours) {
    hours = hours - 4;
    if (hours < 0) {
        hours = (hours + 24); // Assign hours to the respective hour according to how large it is compared to 23
    }
    formatSmallHours(hours);
    return hours;
};

function formatSmallMinutes(minutes) { // Formats minutes less than 10
    if (minutes < 10) {
        minutesDisplay = `0${minutes}`
    } else {
        minutesDisplay = `${minutes}`
    }
    return minutesDisplay;
};

function subtractThirteenMinutes(hours, minutes) {
    minutes = minutes - 13;
    if (minutes < 0) { // Loops minutes backward if it reaches -1 or lower
        minutes = minutes + 60; // -1 = 59, -2 = 58, etc
    }
    formatSmallMinutes(minutes);
    return minutes;
};

function timeFromPhoneToClock(hours, minutes) {
    formatSmallHours(hours);
    formatSmallMinutes(minutes);
    console.log(`The current time is: ${hoursDisplay}:${minutesDisplay}`);
    console.log('\n'); // Skip line
    console.log(`Minus four hours and thirteen minutes...`);
    console.log('\n'); //
    subtractFourHours(hours); // Also formats hours
    // ADD IF STATEMENT HERE? IF MINUTES SOMETHING SOMETHING BEFORE -13 CALCULATION THEN SUBTRACT ONE HOUR :D THAT'S IT
    subtractThirteenMinutes(hours, minutes); // Also formats minutes
    console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay}`); 
};

timeFromPhoneToClock(23, 50);