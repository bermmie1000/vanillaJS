const header = document.querySelector(".header");
const clock = header.querySelector("#clock");

function paintClock() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let apm = "apm";

  if (hour >= 13) {
    apm = "pm";
    hour = hour - 12;
  } else {
    apm = "am";
  }

  function getTwoDigit(time) {
    const twoDigit = `${time}`.length === 1 ? `0${time}` : `${time}`;
    return twoDigit;
  }

  clock.innerText = `${getTwoDigit(hour)}:${getTwoDigit(minute)}:${getTwoDigit(
    second
  )} ${apm} `;
}

function init() {
  setInterval(paintClock, 1000);
}

init();
