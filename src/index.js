import $ from 'jquery';
import './style.scss';

let seconds = 0;
setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been here for ${seconds} seconds`);
}, 1000);
