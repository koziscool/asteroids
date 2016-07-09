
var controller = {

  init: function() {
    view.clearCanvas();
    view.drawShip( ship );
    controller.generateAsteroids(4);
  },

  generateAsteroids: function( numAsteroids ) {
    for( var i = 0; i < numAsteroids; i++ ) {
      space.asteroids.push( asteroid.randAsteroid() )
    }

  },

  gameLoop: function() {
    // view.clearCanvas();
    // view.drawShip( ship );
    // controller.setDirection();
    // controller.setThrust();
    // controller.controlShipFire();
    // controller.updateAsteroidPos();
    // ship.updatePosition();
    // asteroid.collision();
  },

  game:function() {
    setInterval(controller.gameLoop, 20);
  },


}
