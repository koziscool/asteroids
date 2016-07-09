


// holds the objects

var asteroid = {

  Constructor: function() {

  },

  randAsteroid: function() {
    return new asteroid.Constructor();
  },

};

var ship = {

  width: 30,
  height: 50,

  locationX: 300,
  locationY: 300,

  direction: 0.0 * Math.PI,

  velX: 0,
  velY: 0,

  randomStartInfo: function() {

  },

  updatePosition: function() {
    this.locationX += this.velX;
    // funky formula to handle neg and pos velocities plus javascript modulus bug
    this.locationX = ((this.locationX % space.width) + space.width) % space.width
    this.locationY += this.velY;
    this.locationX = ((this.locationY % space.height) + space.height) % space.height
  }

};


var space = {
  asteroids: [],
};