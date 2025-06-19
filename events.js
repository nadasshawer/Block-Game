/*EVENT LISTENERS*/

//Eventlistener for pressing the keys
addEventListener("keydown", ({ keyCode }) => {
  //Switching between keycodes and "a", "s", "d", and "w" keys
  switch (keyCode) {
    //"a" key
    case 65:
      console.log("left");
      keys.left.pressed = true; //Sets the keyPressed property equal to true when pressing the key down
      break;

    //"s" key
    case 83:
      console.log("down");
      block.velocity.y += 20; //Moves the player downwards when clicking the "s" key
      break;

    //"d" key
    case 68:
      console.log("right");
      keys.right.pressed = true; //Sets the keyPressed property equal to true when pressing the key down
      break;

    //"w" key
    case 87:
      console.log("up");
      block.velocity.y -= 1; //Moves the player upwards when clicking the "w" key
      break;
  }
});

//Eventlistener for lifitng the keys
addEventListener("keyup", ({ keyCode }) => {
  //Switching between keycodes and "a", "s", "d", and "w" keys
  switch (keyCode) {
    //"a" key
    case 65:
      console.log("left");
      keys.left.pressed = false; //Sets the keyPressed property equal to true when pressing the key up
      break;

    //"s" key
    case 83:
      console.log("down");
      block.velocity.y += 1; //Moves the player upwards when clicking on the "w" key
      break;

    //"d" key
    case 68:
      console.log("right");
      keys.right.pressed = false; //Sets the keyPressed property equal to true when pressing the key up
      break;

    //"w" key
    case 87:
      console.log("up");
      block.velocity.y -= 20; //Moves the player upwards when clicking on the "w" key
      break;
  }
});
