


// holds the objects

var asteroid = {

  Constructor: function() {

  },

  randAsteroid: function() {
    return new asteroid.Constructor();
  },

};

var ship = {

  locationX: 300,
  locationY: 300,
  direction: 0.0 * Math.PI,
  velX: 0,
  velY: 0,

  updatePosition: function() {
    this.locationX += this.velX;
    // funky formula to handle neg and pos velocities plus javascript modulus bug
    this.locationX = ((this.locationX % space.width) + space.width) % space.width
    this.locationY += this.velY;
    this.locationX = ((this.locationY % space.height) + space.height) % space.height
  },

  headPoint: function() {
    var r = 30;
    var theta = ship.direction;
    point = {
      x: ship.locationX + (r * Math.cos( theta )),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint1: function() {
    var r = 25;
    var theta = 3/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint2: function() {
    var r = 25;
    var theta = 5/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },


};


var space = {
  asteroids: [],

  MAX_VELOCITY: 1.8,
  width: 800,
  height: 600,

  minAsteroidSize: 20
};