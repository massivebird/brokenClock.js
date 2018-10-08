/*

MY GOAL: 

My bedside alarm clock has been broken for quite some time. Well, rather, the time is just behind. 

I want to create two functions: one that takes the input of the CORRECT time - the time displayed on my PC and phone - and converts it to the time displayed on my alarm clock. The second will do the opposite of this.

One challenge lies within the formatting of the alarm clock and the clocks on my PC/phone; the latter is displayed in 24-hour format, while my alarm clock is in 12-hour. I want to maintain these formats within the inputs and outputs of the functions.
So I'll also need to specify AM or PM when inputting and outputting the alarm clock time.

I have discovered that my alarm clock is behind by 4 hours and 13 minutes

*/

function formatHours(hours) { // Formats hours less than 10
    if (hours < 0) {
        hours = hours + 24;
        hoursDisplay = `${hours}`;
    } else if (hours < 10) {
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
    formatHours(hours);
    return hours;
};

function formatMinutes(minutes) { // Formats minutes less than 10
    if (minutes < 10) {
        minutesDisplay = `0${minutes}`
    } else {
        minutesDisplay = `${minutes}`
    }
    return minutesDisplay;
};

function subtractThirteenMinutes(minutes) {
    minutes = minutes - 13;
    if (minutes < 0) { // Loops minutes backward if it reaches -1 or lower
        minutes = minutes + 60; // -1 = 59, -2 = 58, etc
    }
    formatMinutes(minutes);
    return minutes;
};

function subtractHourIfMinuteLoop(hours) {
    hours--;
    formatHours(hours);
    return hours;
}

function timeFromPhoneToClock(hours, minutes) {
    hoursOriginal = hours;
    minutesOriginal = minutes;
    formatHours(hours);
    formatMinutes(minutes);
    console.log(`The current time is: ${hoursDisplay}:${minutesDisplay}`);
    console.log('\n'); // Skip line
    console.log(`Minus four hours and thirteen minutes...`);
    console.log('\n'); //
    hours = subtractFourHours(hours); // Also formats hours
    if (minutes < 13) {
        hours = subtractHourIfMinuteLoop(hours); // Also formats hours
    };
    subtractThirteenMinutes(minutes); // Also formats minutes
    if (hoursOriginal == 16 && minutesOriginal >= 13) {
        formatHours(hours);
        console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay} PM`);
    } else if (hoursOriginal > 16) {
        formatHours(hours);
        console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay} PM`);
    } else if (hoursOriginal < 4) {
        formatHours(hours);
        console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay} PM`);
    } else if (hoursOriginal == 4 && minutesOriginal < 13) {
        formatHours(hours);
        console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay} PM`);
    } else {
        formatHours(hours);
        console.log(`The time displayed on the alarm clock is ${hoursDisplay}:${minutesDisplay} AM`);
    }
};

timeFromPhoneToClock(15, 35);