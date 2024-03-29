// [1]
const { Rectangle, Color } = require("scenegraph");

// [2]
function rectangleHandlerFunction(selection) {
  // [3]
  const newElement = new Rectangle();
  newElement.width = 100;
  newElement.height = 50;
  newElement.fill = new Color("Purple");

  // [4]
  selection.insertionParent.addChild(newElement);
  // [5]
  newElement.moveInParentCoordinates(100, 100);


}

// [6]
module.exports = {
  commands: {
    createRectangle: rectangleHandlerFunction
  }
};