

let world
let canvas;
let keyboard = new Keyboard()
/*
let character = new Character();
let enemies = [
   new Chicken(),
   new Chicken(),
   new Chicken()
];
*/
//ctx = canvas.getContext("2d");
//window.onload = function(){
 
    
   //character.src = './js/I-1.png';

   //setTimeout(function(){ctx.drawImage(character, 20, 20, 50, 150);}, 2000);


   

window.addEventListener("keydown", (e) => {
  if(e.key =='ArrowRight'){
    keyboard.RIGHT = true;
   // console.log("RECHTS");
  }
  if(e.key =='ArrowLeft'){
    keyboard.LEFT = true;
   // console.log("LINKS");
  }  if(e.key =='ArrowUp'){
    keyboard.UP = true;
   // console.log("HOCH");
  }  if(e.key ==' '){
    keyboard.SPACE = true;
    console.log("Werfen");
  }
 // console.log(e);
})

window.addEventListener("keyup", (e) => {
  if(e.key =='ArrowRight'){
    keyboard.RIGHT = false;
  }
  if(e.key =='ArrowLeft'){
    keyboard.LEFT = false;
  }  if(e.key =='ArrowUp'){
    keyboard.UP = false;
  }  if(e.key ==' '){
    keyboard.SPACE = false;
  }
  //console.log(e);
})



function init(){
  canvas= document.getElementById('canvas');
  world = new World(canvas, keyboard)
  
 

   
  }

  function restart(){
  
      window.location = 'game.html';
    //  document.getElementById('playagain').classList.add('d-none');
  
    
  }
  function start(){
    document.getElementById('start').classList.add('d-none')
  }

  // Get the canvas element form the page

 
function fullscreen(){
           var el = document.getElementById('canvas');
 
           if(el.webkitRequestFullScreen) {
               el.webkitRequestFullScreen();
           }
          else {
             el.mozRequestFullScreen();
          }            
}
 

/*
document.onkeydown = function() {
   switch (window.event.keyCode) {
       case 37:
        console.log('Left key is pressed') // execute a function by passing parameter 
        break;
       case 38:
         console.log('Up  key is pressed') 
        break;
       case 39:
         console.log('Right key is pressed') 
        break;
       case 40:
         console.log('Down key is pressed')  
       break;
   }
};
*/