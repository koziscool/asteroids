
var view = {
  

  init: function(){
    view.listeners.keypressListener();
    view.listeners.keyUpListener();
  },

  listeners: {
    keypressListener: function(){
      $( document ).keydown(function(e) {
        switch(e.which) {
          case 37: // left
          controller.direction = "left";
          break;

          case 32: // space
          controller.fire = true;
          break;

          case 39: // right
          controller.direction = "right";
          break;

          case 38: // up
          controller.direction = "up";
          break;
        }
      });
    },//end keypressListener

    keyUpListener: function(){
      $( document ).keyup(function(e) {
        switch(e.which) {
          case 37: // left
          controller.direction = "";
          break;

          case 38: // up
          controller.direction = "";
          break;

          case 39: // right
          controller.direction = "";
          break;

          case 40: // down
          controller.direction = "";
          break;
        }
      });
    }

  },

  clearCanvas:function() {

  },

  drawShip: function( ship ){


  },

}