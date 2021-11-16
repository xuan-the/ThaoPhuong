(function () {

  function playMusic(){
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
        //Its playing...do your job

    } else {
      myAudio.play()
      //Not playing...maybe paused, stopped or never played.

    }
  }

  //fields
  var canvas = document.getElementById("canvas");
  var body = document.getElementsByTagName("body")[0];
  var positions = []
  var ctx = canvas.getContext("2d");
  const MINPETAL = 5
  const MAXPETAL = 13
  var pistilC, petalC, pistilC2, petalC2
  
  /*Initialize flowers*/
  body.addEventListener("click",function(ev){
    drawFlowers()
    playMusic()
  })
  window.onload = drawFlowers
  window.onresize = drawFlowers