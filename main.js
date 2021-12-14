var lip_x = 0;
var lip_y = 0;
function preload(){
    lipstick = loadImage('https://i.postimg.cc/QMG2qBhr/lipstick.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized!!!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lip_x = results[0].pose.nose.x - 25;
        lip_y = results[0].pose.nose.y;
        console.log("nose x =" + lip_x);
        console.log("nose y =" + lip_y);
    }
}

function draw(){
    image(video ,0 ,0 ,300 ,300);
 image(lipstick,lip_x,lip_y,50,50);
}

function take_photo(){
    save('FRENCHFRIIIIES.png');
}