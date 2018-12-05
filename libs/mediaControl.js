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
  setPositionAndPlay(2750, 3450, 3);

  // Fifth
  setPositionAndPlay(3500, 4100, 4);

  // Sixth
  setPositionAndPlay(4250, 4900, 5);

  // Seventh
  setPositionAndPlay(5000, 5650, 6);

  // Eighth
  setPositionAndPlay(5700, 6300, 7);

  // Ninth in plain sight
  setPositionAndPlay(6450, 7100, 8);

  // 10 jack of all trades
  setPositionAndPlay(7200, 7700, 9);

  // 11
  setPositionAndPlay(7800, 8400, 10);

  // 12 reunion
  setPositionAndPlay(8600, 9800, 11);

  // 13
  setPositionAndPlay(9850, 10400, 12);

  // 14
  setPositionAndPlay(10550, 11100, 13);
  
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

