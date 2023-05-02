import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = data => {
  const playTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(playTime));
};
player.on('timeupdate', onPlay);
const contPlay = () => {
  const savedPlaytime = localStorage.getItem('videoplayer-current-time');
  if (savedPlaytime) {
    player.setCurrentTime(JSON.parse(savedPlaytime));
  }
  document.addEventListener(
    'timeupdate',
    throttle(() => {}, 1000)
  );
};
contPlay();
