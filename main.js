noseX = 0;
noseY = 0;
function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/RZ3rqW6q/653245-clown-glasses-mask-avatar-face-icon.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{

if(results.length > 0 )
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX ="+results[0].pose.nose.x);
console.log("noseY ="+results[0].pose.nose.y);
}
};

function modelLoaded(){
console.log('PoseNet Is Initialized');
}

function draw()
{
image(video,0,0,300,300);
image(clown_nose, noseX-50, noseY-65, 95, 140);
}

function take_snapshot()
{
    save('myFilterimage.png');
}