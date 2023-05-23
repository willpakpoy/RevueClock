import computeMinutes from "./computeMinutes";

async function computeTimeSlot(timeSlot) {
    let minute = await computeMinutes();
    if (minute < 8*60+30) {
        if (timeSlot){timeSlot.value = "beforeSchool"};
        return {
            humanReadable: "before school",
            countdownTo: 0,
            countdownToTime: "",
            code: "beforeSchool"
        };
    } else if (minute >= 8*60+30 && minute < 10*60+40) {
        if (timeSlot){timeSlot.value = "beforeRecess"};
        return {
            humanReadable: "before recess",
            countdownTo: 10*60+40,
            countdownToTime: "10:40:00",
            code: "beforeRecess"
        };
    } else if (minute >= 10*60+40 && minute < 11*60) {
        if (timeSlot){timeSlot.value = "recess"};
        return {
            humanReadable: "recess",
            countdownTo: 0,
            countdownToTime: "",
            code: "recess"
        }
    } else if (minute >= 11*60 && minute < 12*60+55) {
        if (timeSlot){timeSlot.value = "beforeLunch"};
        return {
            humanReadable: "before lunch",
            countdownTo: 12*60+55,
            countdownToTime: "12:55:00",
            code: "beforeLunch"
        };
    } else if (minute >= 12*60+55 && minute < 13*60+35) {
        if (timeSlot){timeSlot.value = "lunch"};
        return {
            humanReadable: "lunch",
            countdownTo: 0,
            countdownToTime: "",
            code: "lunch"
        };
    } else if (minute >= 13*60+35 && minute < 15*60+30) {
        if (timeSlot){timeSlot.value = "beforeEOD"};
        return {
            humanReadable: "before the end of school",
            countdownTo: 15*60+30,
            countdownToTime: "15:30:00",
            code: "beforeEOD"
        };
    } else if (minute >= 15*60+30) {
        if (timeSlot){timeSlot.value = "EOD"};
        return {
            humanReadable: "the end of school",
            countdownTo: 0,
            code: "EOD"
        };
    }
}

export default computeTimeSlot;