import {v4} from 'uuid';

function newTimer(attrs = {}) {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: v4(), // eslint-disable-line no-undef
    elapsed: 0,
  };

  return timer;
}

function findById(array, id, cb) {
  array.forEach((el) => {
    if (el.id === id) {
      cb(el);
      return;
    }
  });
}

const renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if(runningSince){
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}

const millisecondsToHuman = (ms) =>{
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
     pad(hours.toString(),2),
     pad(minutes.toString(),2),
     pad(seconds.toString(),2),
  ].join(':');

  return humanized;
}

const pad = (newString,size) =>{
  let padded = newString;
  while(padded.length < size) padded = `0${padded}`;
  return padded;
}

const helpers = {
  millisecondsToHuman,
  newTimer,
  findById,
  renderElapsedString,
}

export default helpers;


