/*PLATFORMS*/

//Creating the player platform (space)
class Platform {
  constructor({ x, y, image }) {
    //Platform position
    this.position = {
      x,
      y,
    };

    //Player dimensions
    this.width = 200; //width
    this.height = 30; //height
    this.image = image; //image
  }

  look() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

//Platform images
const image = new Image();
image.src = platformImg;
console.log(image);

//Calling multiple platroms
const platforms = [
  new Platform({ x: 200, y: 100, image }),
  new Platform({ x: 500, y: 200 }),
  new Platform({ x: 900, y: 50 }),
  new Platform({ x: 2000, y: 300 }),
  new Platform({ x: 1500, y: 150 }),
  new Platform({ x: 2500, y: 600 }),
  new Platform({ x: 3000, y: 100 }),
  new Platform({ x: 4000, y: 200 }),
  new Platform({ x: 3500, y: 30 }),
  new Platform({ x: 6000, y: 140 }),
  new Platform({ x: 3800, y: 40 }),
  new Platform({ x: 5000, y: 600 }),
  new Platform({ x: 5400, y: 250 }),
  new Platform({ x: 5900, y: 70 }),
  new Platform({ x: 6500, y: 890 }),
  new Platform({ x: 6700, y: 165 }),
  new Platform({ x: 5600, y: 35 }),
  new Platform({ x: 7000, y: 120 }),
  new Platform({ x: 7400, y: 80 }),
];
