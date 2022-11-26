// set initial count
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
let btns   = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        } else if(count < 0) {
            value.style.color = "red";
        } else if(count === 0) {
            value.style.color = "black";
        }
        value.innerHTML = count;
    });
});







