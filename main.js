function preload() {
    clown_image=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function gotPoses(result)
{  if(result.length>0) 
   {
       console.log(result);
       NoseX=result[0].pose.nose.x
       NoseY=result[0].pose.nose.y
       console.log("NoseX "+NoseX);
       console.log("NoseY "+NoseY);
       console.log("nose x =" +result[0].pose.nose.x);
       console.log("nose y =" +result[0].pose.nose.y);
   }    
}
function draw(){
image(video,0,0,300,300)
image(clown_image,NoseX,NoseY,30,30)   
}

function take_snapshot({
save="myfilteredimage.png"
})
