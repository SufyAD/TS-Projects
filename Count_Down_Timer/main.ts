#! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// import { setInterval } from "timers/promises";

const countDownEl = document.getElementById("timer")!;
let endDate = new Date("2023-04-20 10:00").getTime();//end on this date

setInterval(setCount, 1000);

function setCount() {
    const startDate = new Date().getTime();
    let diff = endDate - startDate;

    //detailing
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diff % (1000 * 60) / (1000));

    countDownEl.innerHTML = `${days} : ${hours} : ${min} : ${sec}`
    sec++;

    // if (diff <= 0) {
    //     clearInterval(timer);
    //     console.log("Timer Expired!")
    //     process.exit(0)
    // }
    // else {
    //     console.clear();
    //     console.log(`${days}:${hours}:${min}:${sec}`)//seconds timer
    // }

}

// const exit = await inquirer.prompt([
//     {
//         name:"confirm",
//         type: "confirm",
//         message: "Stop Timer"
//     }
// ]);
