let startTime, endTime;
const startButton = document.getElementById('startButton');
const reactionArea = document.getElementById('reactionArea');
const message = document.getElementById('message');
const result = document.getElementById('result');

startButton.addEventListener('click', () => {
  message.textContent = 'Wait for the color to change...';
  startButton.style.display = 'none';
  reactionArea.style.display = 'block';
  reactionArea.style.backgroundColor = '#ccc';
  result.textContent = '';

  const randomTime = Math.floor(Math.random() * 5000) + 2000; // 2 to 7 seconds

  setTimeout(() => {
    reactionArea.style.backgroundColor = '#4caf50'; // Change to green
    startTime = Date.now();
    message.textContent = 'Click now!';
  }, randomTime);
});

reactionArea.addEventListener('click', () => {
  if (reactionArea.style.backgroundColor === 'rgb(76, 175, 80)') { // Color '#4caf50'
    endTime = Date.now();
    const reactionTime = (endTime - startTime) / 1000;
    result.textContent = `Your reaction time is: ${reactionTime} seconds`;
  } else {
    result.textContent = 'Too soon! Wait for the color to change.';
  }
  reactionArea.style.display = 'none';
  startButton.style.display = 'block';
  message.textContent = 'Click "Start" to try again.';
});
