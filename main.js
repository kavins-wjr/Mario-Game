img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	img = loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(650,400);
	video = createCapture(VIDEO );
	video.size(600 , 300);
	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console')


}

function modelLoaded()
{
	console.log("model loaded!");
}

function gotPoses(results)
{
if(results.length > 0)
{
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}

function draw() {
	game()
	background("#00FF00");
	if(noseX < 300)
	{
		marioX = marioX - 1 ;
	}
	if(noseX > 300)
	{
		marioX = marioX + 1
	}
	if(noseY < 150)
	{
		marioY = marioY - 1
	}
	image(img , marioX , marioY , 40 , 70 );
}






