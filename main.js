song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist= 0;
scorerightWrist=0;

 function preload(){
    song=loadSound("music.mp3")
    song2=loadSound("harry_potter_theme.mp3")
 }

 function draw(){
  image(video,0,0,600,500);
  fill("blue");
  stroke("white");
  circle(leftWristX,leftWristY,20);
  remove_decimal=floor(Number(leftWristY))
  volume= remove_decimal/500;
  document.getElementById("volume").innerHTML="volume = "+volume;
  song.setVolume(volume);

  
}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses)
  }
    function modelLoaded(){
      console.log("posenet is initilised")
    }

    function gotPoses(results){
      if(results.length>0)
      {
         console.log(results)
           scoreLeftWrist=results[0].pose.keypoints[9].score;
           scorerightWrist=results[0].pose.keypoints[10].score;
           
         console.log("leftwrist score =  " + scoreLeftWrist);
         leftWristX= results[0].pose.leftWrist.x;
         leftWristY= results[0].pose.leftWrist.y;
          console.log("leftwristx = "+leftWristX+" leftwristY = " +leftWristY);
             
          rightWristX= results[0].pose.rightWrist.x;
         rightWristY= results[0].pose.rightWrist.y;
          console.log("rightwristx = "+rightWristX+" rightWristY = " +rightWristY);

           


          

        }
    }
 

  function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)

  }
  function pause(){
    song.pause()
  }