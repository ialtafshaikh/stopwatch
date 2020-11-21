// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs); //00

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin); //00

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec); //00

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs); //00

  let formattedHH = hh.toString().padStart(2, "0"); //00
  let formattedMM = mm.toString().padStart(2, "0"); //00
  let formattedSS = ss.toString().padStart(2, "0"); //00

  return `${formattedHH}:${formattedMM}:${formattedSS}`; //00:00:00
}
