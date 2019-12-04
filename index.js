console.log(PIXI);
const appContainer = document.getElementById("app-container");
// create renderer
let renderer = PIXI.autoDetectRenderer(256, 256);
// add the canvas to the HTML doc
appContainer.appendChild(renderer.view);
// create a container object called the 'stage'
let stage = new PIXI.Container();
// tell renderer to render stage
renderer.render(stage);
