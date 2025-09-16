(function () {
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    let countdownTimerId = null;

    startBtn.addEventListener('click', () => {
        if (hour.value == 0 && minute.value == 0 && second.value == 0) return;

        function startInterval() {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";

            countdownTimerId = setInterval(() => {
                timer();
            }, 1000);
        }


        startInterval();
    });

    stopBtn.addEventListener('click', () => {
        stopInterval('pause');
    });


    resetBtn.addEventListener('click', () => {
        hour.value = "";
        minute.value = "";
        second.value = "";

        stopInterval();
    })

    function timer() {
        if (second.value > 60) {
            minute.value++;
            second.value = parseInt(second.value) - 59;
        }
        if (minute.value > 60) {
            hour.value++;
            minute.value = parseInt(minute.value) - 60;
        }

        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            hour.value = "";
            minute.value = "";
            second.value = "";

            stopInterval();
        } else if (second.value != 0) {
            second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`
        } else if (minute.value != 0 && second.value == 0) {
            second.value = 59;
            minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`
        } else if (hour.value != 0 && minute.value == 0) {
            minute.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
    }

    function stopInterval(state) {
        startBtn.style.display = 'initial';
        stopBtn.style.display = 'none';

        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

        clearInterval(countdownTimerId);
    }
})();