
var controller = {

  direction: "",
  fire: false,

  init: function() {
    view.clearCanvas();
    view.drawShip( ship );
    controller.generateAsteroids( 4);
  },

  generateAsteroids: function( numAsteroids ) {
    for( var i = 0; i < numAsteroids; i++ ) {
      space.asteroids.push( asteroid.randAsteroid() )
    }

  },

  setThrust: function(){
    if(controller.direction === "up"){
      // console.log( ship.direction );
      console.log("thrust")
      console.log( ship.velX );
      ship.velX += 1 * Math.cos(ship.direction) / 2;
      ship.velY += 1 * Math.sin(ship.direction) / 2;
    }
  },

  setDirection: function(  ) {
    if(controller.direction === "right"){
      console.log( ship.direction );
      ship.direction += 1/20 * Math.PI;
      view.drawShip( ship );
    }else if (controller.direction === "left"){
      ship.direction -= 1/20 * Math.PI;
    }
  },

  controlShipFire: function() {
    if(controller.fire === true){
      ship.fire();
      controller.fire = false;
    }
  },

  splitAsteroid: function(ast, index){
    space.asteroids.push(new asteroid.Constructor(ast.locationX - 25, ast.locationY - 25, ast.velX * -1, ast.velY * -1, ast.width/2, ast.height/2));
    space.asteroids.push(new asteroid.Constructor(ast.locationX + 25, ast.locationY + 25, ast.velX * -1, ast.velY * -1, ast.width/2, ast.height/2));

    space.asteroids.splice(index, 1);
  },

  updateAsteroidPos: function(){
    space.asteroids.forEach(function(ast, index, array){
      if (ast.collision === true && ast.width > space.minAsteroidSize){
        controller.splitAsteroid(ast, index);
      }
      ast.updatePosition();

      view.drawAsteroid(ast);
    });
  },

  gameLoop: function() {
    view.clearCanvas();
    view.drawShip( ship );
    controller.setDirection();
    controller.setThrust();
    controller.controlShipFire();
    controller.updateAsteroidPos();
    ship.updatePosition();
    asteroid.collision();
  },

  game:function() {
    setInterval(controller.gameLoop, 20);
  },


}
