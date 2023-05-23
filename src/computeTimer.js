import computeTimeSlot from "./computeTimeSlot";

function zeroedTime(time) {
	if (time < 10) {
    return "0" + time;
  }
  else {
    return time;
  }
}

async function computeTimer() {
    let timeSlot = await computeTimeSlot();
    if (timeSlot.countdownTo === 0) {
        document.title = "When does school end?"
        return
    } else {
        var today = new Date()
        var countDownTo = new Date(`${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()} ${timeSlot.countdownToTime}`);

        var distance = countDownTo - today;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var countDownString = `${zeroedTime(hours)}:${zeroedTime(minutes)}:${zeroedTime(seconds)}`
        if (Notification.permission === "granted" && seconds===0) {
          new Notification(`${minutes} minutes left till the next break.`)
        }
        

        document.title = `WDSE: ${countDownString}`
        return countDownString;
    }
}

export default computeTimer;