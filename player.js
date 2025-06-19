/*PLAYER BLOCK*/

//Creating the player block - Object Oriented
class Player {
  constructor() {
    //Player position
    this.position = {
      x: 100, //x-position
      y: 100, //y-position
    };
    //Player velocity
    this.velocity = {
      x: 0, //Moves player right and left
      y: 1, //Moves player up and down
    };

    //Player dimensions
    this.width = 40; //width
    this.height = 40; //height
  }

  //Player look
  look() {
    context.fillStyle = "red"; //Sets the color of the block to red
    context.fillRect(this.position.x, this.position.y, this.width, this.height); //Draws the player (block) with whatever the x, y, and dimensions are set to
  }

  //Player movement
  update() {
    this.look();
    this.position.y += this.velocity.y; //Moves the player block down
    this.position.x += this.velocity.x; //Moves the player block right

    //If the bottom of the player block plus its velocity is <= the canvas height, this code that adds gravity onto our y velocity will be excuted
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity; //Allows the block to accelerate over time
    else this.velocity.y = 0;
  }
}

//Calling the player
const block = new Player();

//Animation function
function animate() {
  requestAnimationFrame(animate); //Loops the animation
  context.clearRect(0, 0, canvas.width, canvas.height); //Clears everything on the canvas while maintaining the block's shape

  block.update(); //Moves the player block

  //Loops the platform to create multiple platforms
  platforms.forEach((platform) => {
    platform.look(); //Draws the platform
  });

  //If the right key is NOT pressed, the block player will stop moving to the right. If it IS pressed, the block player will move to the right. Also, block will stop moving when it hits the 500 point to the right
  if (keys.right.pressed && block.position.x < 500) {
    block.velocity.x = 5;
  }
  //If the left key is NOT pressed, the block player will stop moving to the left. If it IS pressed, the block player will move to the left. Also, block will stop moving when it hits the 10 point to the left
  else if (keys.left.pressed && block.position.x > 10) {
    block.velocity.x = -5;
  } else {
    block.velocity.x = 0;

    //Moves the platform to the left when moving forward
    if (keys.right.pressed) {
      scrolOffset += 5;
      //Loops the platform to create multiple platforms
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    }
    //Moves the platform to the right when moving backward
    else if (keys.left.pressed) {
      scrolOffset -= 5;
      //Loops the platform to create multiple platforms
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
  }

  //Platform collision detedtion
  //When the block player touches the platform it will stop moving
  platforms.forEach((platform) => {
    if (
      block.position.y + block.height <= platform.position.y &&
      block.position.y + block.height + block.velocity.y >=
        platform.position.y &&
      block.position.x + block.width >= platform.position.x &&
      block.position.x <= platform.position.x + platform.width
    ) {
      block.velocity.y = 0;
    }
  });

  //Prints YOU WIN when you cover an offset of 1,000,000
  if (scrolOffset > 1000000) {
    console.log("you win!");
    context.fillStyle = "black"; //Text color
    context.font = "bold 100px sans-serif"; //Text font and size
    context.fillText("You Win!!", 460, 230); //Text and position
  }
}
animate(); //Calling the animation function
