
// holds the objects

var asteroid = {

  Constructor: function() {

    this.updatePosition =function() {
      this.locationX += this.velX;
      // funky formula to handle neg and pos velocities plus javascript modulus bug
      this.locationX = ((this.locationX % space.width) + space.width) % space.width
      this.locationY += this.velY;
      this.locationX = ((this.locationY % space.height) + space.height) % space.height
    };

  },

  randAsteroid: function() {
    return new asteroid.Constructor();
  },



  collision: function(){
    $.each(space.asteroids, function(indexA, astA){
      $.each(space.asteroids, function(indexB, astB){
        if (astA.locationX < astB.locationX + astB.width &&
           astA.locationX + astA.width > astB.locationX &&
           astA.locationY < astB.locationY + astB.height &&
           astA.height + astA.locationY > astB.locationY && astA !== astB){
             astA.collision = true;
             astB.collision = true;
           }
      });

    });

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

  fire: function() {
    var bulletHeight = 2;
    var bulletWidth = 2;
    var bulletVX =  10 * Math.cos( ship.direction);
    var bulletVY = 10 * Math.sin( ship.direction);
    var bullet =  new asteroid.Constructor( ship.locationX, ship.locationY,
     bulletVX, bulletVY, bulletHeight, bulletWidth );

    space.asteroids.push(bullet);
  }

};


var space = {
  asteroids: [],

  MAX_VELOCITY: 1.8,
  width: 800,
  height: 600,

  minAsteroidSize: 20
};