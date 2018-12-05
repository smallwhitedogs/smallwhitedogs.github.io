//get the audio element from the HTML code
var mediaClips = [];
var clipNumber = 15;

for (let index = 1; index <= clipNumber; index++) {
  var clipName ="mediaClip";
  var indexNum = index;
  var media = document.getElementById(clipName.concat(indexNum));
  mediaClips.push(media);
}

let scrollPosition;

// This function detects the scroll position and  
function scrollPlay(){  
  window.requestAnimationFrame(scrollPlay);
  scrollPosition = window.pageYOffset;

  /*
  Uncomment this line to see the scroll position on console
  */
 console.log(scrollPosition);
  

  // First
  setPositionAndPlay(650, 1400, 0);

  // Second
  setPositionAndPlay(1400, 2000, 1);

  // Third
  setPositionAndPlay(2100, 2650, 2);

  // Fourth
  setPositionAndPlay(2750, 3500, 3);

  // Fifth
  setPositionAndPlay(3600, 4100, 4);

  // Sixth
  setPositionAndPlay(4250, 5840, 5);

  // Seventh
  setPositionAndPlay(5854, 6590, 6);

  // Eighth
  setPositionAndPlay(6603, 7350, 7);

  // Ninth
  setPositionAndPlay(7367, 8870, 8);

  // 10
  setPositionAndPlay(8880, 9930, 9);

  // 11
  setPositionAndPlay(9940, 10710, 10);

  // 12
  setPositionAndPlay(10726, 10999, 11);

  // 13
  setPositionAndPlay(11629, 11720, 12);

  // 14
  setPositionAndPlay(12389, 13000, 13);

  // 15
  setPositionAndPlay(13854, 14000, 14);
}

window.requestAnimationFrame(scrollPlay);


function activateMedia() {
  document.getElementById("myBtn").innerHTML = "media activated";
  for (let index = 0; index < mediaClips.length; index++) {
    mediaClips[index].play();
    mediaClips[index].loop = false;
    
  }
}

/*This function sets the scroll positions for playing an audio/video and sets the reproduction time in seconds
startScroll: The scroll position 
*/
function setPositionAndPlay(startScroll, endScroll, clipID){
  var tempClip = mediaClips[clipID];
  if (tempClip != undefined){
    if (scrollPosition > startScroll && scrollPosition < endScroll){
      tempClip.play();
    } else {
      tempClip.pause();
    }
  }
}

