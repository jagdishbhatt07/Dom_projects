// Set the countdown date
const countdownDate = new Date("May 14, 2024 11:30:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("mins").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("secs").innerHTML = seconds.toString().padStart(2, "0");

  // Stop the countdown when the date is reached
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown").innerHTML = "Giveaway has ended!";
  }
}, 1000);