document.addEventListener("DOMContentLoaded", function () {
    const alarmTimeInput = document.getElementById("alarm-time");
    const setAlarmButton = document.getElementById("set-alarm");
    const stopAlarmButton = document.getElementById("stop-alarm");
    let alarmInterval;

    setAlarmButton.addEventListener("click", function () {
        const alarmTime = alarmTimeInput.value;
        if (alarmTime === "") return;

        const [hours, minutes] = alarmTime.split(":");
        const now = new Date();
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
        const timeDifference = alarmDate - now;

        if (timeDifference <= 0) {
            alert("Please choose a time in the future.");
            return;
        }

        setAlarmButton.disabled = true;
        alarmTimeInput.disabled = true;

        alarmInterval = setTimeout(() => {
            alert("Wake up! It's time!");
            stopAlarmButton.disabled = true;
            setAlarmButton.disabled = false;
            alarmTimeInput.disabled = false;
        }, timeDifference);

        stopAlarmButton.disabled = false;
    });

    stopAlarmButton.addEventListener("click", function () {
        clearTimeout(alarmInterval);
        stopAlarmButton.disabled = true;
        setAlarmButton.disabled = false;
        alarmTimeInput.disabled = false;
    });
});
