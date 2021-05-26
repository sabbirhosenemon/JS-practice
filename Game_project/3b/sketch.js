/*

The Game Project

Week 3

Game interaction

### The Game Project 3 b – Canyons and coins

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	canyon = {
		x_pos: 360,
		width: 70
	};

	collectable = {
		x_pos: 200, 
		y_pos: 370, 
		size: 50,
		isFound: false
	};

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	fill(0);
	rect(canyon.x_pos,floorPos_y,canyon.width,144);
	fill(100, 155, 255);
	rect(canyon.x_pos,floorPos_y+50,canyon.width,144);

	//disappear the collectable
	if (dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos)<70)
	{
		collectable.isFound = true;
		console.log(collectable.isFound)
		console.log(gameChar_x)
	}

	console.log('game char '+gameChar_x)
	console.log('collect x '+collectable.x_pos)
	//draw the collectable
	if (collectable.isFound == false)
	{
		fill(255, 255, 0);
		ellipse(collectable.x_pos,collectable.y_pos,collectable.size);
		fill(255, 215, 0);
		ellipse(collectable.x_pos,collectable.y_pos,collectable.size-10);
		fill(0)
		text('$',collectable.x_pos-3,collectable.y_pos+4);
	}


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,15,20)
		fill(108, 86, 95);
		rect(gameChar_x-10,gameChar_y-55,20,30)
		fill(120);
		rect(gameChar_x-5,gameChar_y-25,10,15)
		fill(120);
		rect(gameChar_x-7.5,gameChar_y-25,10,10)
		fill(150);
		rect(gameChar_x-2.5,gameChar_y-52,5,15)

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,15,20)
		fill(108, 86, 95);
		rect(gameChar_x-10,gameChar_y-55,20,30)
		fill(120);
		rect(gameChar_x-5,gameChar_y-25,10,15)
		fill(120);
		rect(gameChar_x-2.5,gameChar_y-25,10,10)
		fill(150);
		rect(gameChar_x-2.5,gameChar_y-52,5,15)

	}
	else if(isLeft)
	{
		// add your walking left code
		//head
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,15,20)
		//body
		fill(108, 86, 95);
		rect(gameChar_x-10,gameChar_y-55,20,30)
		//leg
		fill(120);
		rect(gameChar_x-5,gameChar_y-25,10,20)
		fill(120);
		rect(gameChar_x-7.5,gameChar_y-25,10,15)
		//shoe
		fill(0);
		rect(gameChar_x-5,gameChar_y-5,10,5)
		fill(0);
		rect(gameChar_x-2.5,gameChar_y-5 ,10,5)
		//hand
		fill(150);
		rect(gameChar_x-2.5,gameChar_y-52,5,20)

	}
	else if(isRight)
	{
		// add your walking right code
		//head
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,15,20)
		//body
		fill(108, 86, 95);
		rect(gameChar_x-10,gameChar_y-55,20,30)
		//leg
		fill(120);
		rect(gameChar_x-5,gameChar_y-25,10,20)
		fill(120);
		rect(gameChar_x-2.5,gameChar_y-25,10,15)
		//shoe
		fill(0);
		rect(gameChar_x-5,gameChar_y-5,10,5)
		fill(0);
		rect(gameChar_x-2.5,gameChar_y-5 ,10,5)
		//hand
		fill(150);
		rect(gameChar_x-2.5,gameChar_y-52,5,20)

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,20,20)
		fill(108, 86, 95);
		rect(gameChar_x-15,gameChar_y-55,30,30)
		fill(120);
		rect(gameChar_x-15,gameChar_y-25,10,15)
		fill(120);
		rect(gameChar_x+5,gameChar_y-25,10,15)
		fill(150);
		rect(gameChar_x-20,gameChar_y-52,5,15)
		fill(150);
		rect(gameChar_x+15,gameChar_y-52,5,15)

	}
	else
	{
		// add your standing front facing code
		//head
		fill(108, 86, 61);
		ellipse(gameChar_x,gameChar_y-65,20,20)
		//body
		fill(108, 86, 95);
		rect(gameChar_x-15,gameChar_y-55,30,30)
		//leg
		fill(120);
		rect(gameChar_x-15,gameChar_y-25,10,20)
		fill(120);
		rect(gameChar_x+5,gameChar_y-25,10,20)
		//shoe
		fill(0);
		rect(gameChar_x-15,gameChar_y-5,10,5)
		fill(0);
		rect(gameChar_x+5,gameChar_y-5 ,10,5)
		//hand
		fill(150);
		rect(gameChar_x-20,gameChar_y-52,5,20)
		fill(150); 
		rect(gameChar_x+15,gameChar_y-52,5,20)

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if (isLeft)
	{
		gameChar_x -=5; 
	}
	else if (isRight)
	{
		gameChar_x +=5; 
	}
	if(floorPos_y > gameChar_y)
	{
		gameChar_y +=2;
		isFalling = true; 
	}
	else
	{
		isFalling = false; 
	}
	if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos+canyon.width)
	{
		isPlummeting = true;
	}
	else
	{
		isPlummeting = false;
	}
	if (isPlummeting == true)
	{
		gameChar_y +=3;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	//left arrow press
	if (keyCode == 37)
	{
		isLeft = true;
		console.log(isLeft);
	}

	//right arrow press
	else if (keyCode == 39)
	{
		isRight = true;
		console.log(isRight);
	}

	//spacebar pressed
	else if (keyCode == 32)
	{
		isFalling = true;
		console.log(isFalling);
		if (isFalling && gameChar_y==floorPos_y)
		{
			gameChar_y -=100; 
		}
		else if (gameChar_y >= floorPos_y)
		{
			gameChar_y =floorPos_y-100;
		}
	}

} 

function keyReleased()  
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	if (keyCode == 37)
	{
		isLeft = false;
		console.log(isLeft);
	}
	else if (keyCode == 39)
	{
		isRight = false;
		console.log(isRight);
	}
	else if (keyCode == 32)
	{
		isFalling = false;
		console.log(isFalling);
	}
}
