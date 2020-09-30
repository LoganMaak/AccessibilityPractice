//audio player controls

const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');

const player = document.querySelector('audio');

player.removeAttribute('controls');

playPauseBtn.onclick = function() {
  if(player.paused) {
    player.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    player.pause();
    playPauseBtn.textContent = 'Play';
  }
};

stopBtn.onclick = function() {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = 'Play';
};

rwdBtn.onclick = function() {
  player.currentTime -= 3;
};

fwdBtn.onclick = function() {
  player.currentTime += 3;
  if(player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
  }
};

player.ontimeupdate = function() {
  let minutes = Math.floor(player.currentTime / 60);
  let seconds = Math.floor(player.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes<10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds<10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  mediaTime = minuteValue + ":" + secondValue;
  timeLabel.textContent = mediaTime;
};

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
