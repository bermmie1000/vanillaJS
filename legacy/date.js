// const header = document.querySelector(".header");
const date = document.querySelector("#date");

function paintDate() {
  const sysDate = new Date();
  const year = sysDate.getFullYear();
  const month = sysDate.getMonth();
  const day = sysDate.getDay();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][sysDate.getDay()];

  function getTwoDigit(time) {
    const twoDigit = `${time}`.length === 1 ? `0${time}` : `${time}`;
    return twoDigit;
  }

  date.innerText = `${year}-${getTwoDigit(month)}-${getTwoDigit(
    day
  )} ${dayOfWeek}`;
}

function init() {
  setInterval(paintDate, 1000);
}

init();
