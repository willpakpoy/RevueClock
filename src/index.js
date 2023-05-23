import { createApp, ref, onMounted } from "vue/dist/vue.esm-browser.prod"; 

import computeTimeSlot from "./computeTimeSlot";
import computeTimerRequired from "./computeTimerRequired";
import computeTimer from "./computeTimer";

import "./style.scss";

const app = createApp({
    setup() {
        let timeSlot = ref({});
        let timerRequired = ref(false);
        let timer = ref("");

        let dummy = ref("")

        onMounted(async()=>{
            timeSlot.value = await computeTimeSlot(dummy);
            computeTimerRequired(timerRequired);
            timer.value = await computeTimer();
            Notification.requestPermission()
            setInterval(async()=> {
                timeSlot.value = await computeTimeSlot(dummy);
                computeTimerRequired(timerRequired)
                timer.value = await computeTimer();
            }, 1000)
        })

        return {
            timeSlot,
            timerRequired,
            timer
        }
    }
});
app.mount("#root");