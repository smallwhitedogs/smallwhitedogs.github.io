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
  setPositionAndPlay(2086, 2309, 1);

  // Third
  setPositionAndPlay(765, 1030, 2);

  // Fourth
  setPositionAndPlay(1118, 1370, 3);

  // Fifth
  setPositionAndPlay(1469, 1720, 4);

  // Sixth
  setPositionAndPlay(1822, 2063, 5);

  // Seventh
  setPositionAndPlay(2170, 2414, 6);

  // Eighth
  setPositionAndPlay(2520, 2920, 7);
  
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

