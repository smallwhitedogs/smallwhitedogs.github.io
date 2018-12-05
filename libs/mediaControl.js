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
  setPositionAndPlay(770, 1437, 0);

  // Second
  setPositionAndPlay(1497, 2309, 1);

  // Third
  setPositionAndPlay(2207, 2830, 2);

  // Fourth
  setPositionAndPlay(2840, 3629, 3);

  // Fifth
  setPositionAndPlay(3629, 4380, 4);

  // Sixth
  setPositionAndPlay(4389, 5840, 5);

  // Seventh
  setPositionAndPlay(5854, 6590, 6);

  // Eighth
  setPositionAndPlay(6603, 7350, 7);

  // Ninth
  setPositionAndPlay(7367, 8870, 0);

  // 10
  setPositionAndPlay(8880, 9930, 1);

  // 11
  setPositionAndPlay(9940, 10710, 2);

  // 12
  setPositionAndPlay(10726, 1370, 3);

  // 13
  setPositionAndPlay(3629, 1720, 4);

  // 14
  setPositionAndPlay(4389, 2063, 5);

  // 15
  setPositionAndPlay(5854, 2414, 6);
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

