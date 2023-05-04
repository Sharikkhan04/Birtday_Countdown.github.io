//second page load
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const inputValue = urlParams.get('inputValue');
const birthdateValue = urlParams.get('birthdate');
const time = urlParams.get('time');

if (inputValue === '' || birthdateValue === '' || time === '') {
  alert("Input value is empty, please fill out all fields!");
  window.location.href = `index.html`;
}
else {
  startCountdown();
  function startCountdown() {   
    // manipulate span innertext
    const username = document.getElementById("wish");
    username.textContent = `happy birthday ${inputValue}`;

    let Day = document.getElementsByClassName("day")[0];
    let Hour = document.getElementsByClassName("hour")[0];
    let Minute = document.getElementsByClassName("minute")[0];
    let Second = document.getElementsByClassName("second")[0];
    
    let BirthDate = new Date(`${birthdateValue}T${time}`).getTime();
    setInterval(function () {
      let Now = new Date().getTime();
      let RemainingDays = Now - BirthDate;
      if (RemainingDays < 0) {
        RemainingDays = Math.abs(RemainingDays);
      }
      let days = Math.floor(RemainingDays / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (RemainingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((RemainingDays % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((RemainingDays % (1000 * 60)) / 1000);
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      hours = hours < 10 ? `0${hours}` : hours;

      Day.innerHTML = days;
      Hour.innerHTML = hours;
      Minute.innerHTML = minutes;
      Second.innerHTML = seconds;

      // wish birthday when the countdown stop..
      let BirthdayWish = document.getElementsByClassName("wish")[0];

      if (new Date(BirthDate) <= new Date(Now)) {
        BirthdayWish.style.display = "block";
        Day.innerHTML = "00";
        Hour.innerHTML = "00";
        Minute.innerHTML = "00";
        Second.innerHTML = "00";
      }
    }, 1000);
  }
}
