import computeTimeSlot from "./computeTimeSlot";

async function computeTimerRequired(timerRequired) {
    let currentTimeSlot = await computeTimeSlot();
    if (currentTimeSlot.code === "beforeSchool" || currentTimeSlot.code === "recess" || currentTimeSlot.code === "lunch" || currentTimeSlot.code === "EOD") {
        if (timerRequired) {timerRequired.value = false};
        return false
    } else {
        if (timerRequired) {timerRequired.value = true};
        return true
    }
}

export default computeTimerRequired;