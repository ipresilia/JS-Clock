const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // + 90 because of the default starting hand position
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Digital Time
  document.querySelector('#digital').innerHTML =
  checkTime(hours) + ":" + checkTime(minutes) + ":" + checkTime(seconds);

  function checkTime(i) {
      if (i < 10) {
        i = '0' + i
      }  // add zero in front of numbers < 10
      return i;
  }
}


setInterval(setDate, 1000);
