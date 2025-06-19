/*BASIC SETUP*/

//Importing images

//Acessing the canvas
const canvas = document.querySelector("canvas");

//Setting canvas size
canvas.width = window.innerWidth; //Sets the canvas equal to the window's width
canvas.height = window.innerHeight; //Sets the canvas equal to the window's height

//Acessing the context and creating a 2D game
const context = canvas.getContext("2d");
console.log(context);

//Gravity value
const gravity = 0.5;

//Controlling the condition of the keys
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrolOffset = 0;
