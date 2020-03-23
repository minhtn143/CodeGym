

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 60;
    console.log('right: ' + this.left);
  }
  this.moveLeft = function(){
    this.left -= 60;
    console.log('left: ' + this.left);
  }
  this.moveDown = function(){
    this.top += Math.floor(Math.random()*100);
    console.log('down: ' + this.top);
  }
  this.moveUp = function(){
    this.top -= Math.floor(Math.random()*100);
    console.log('up: ' + this.top);
  }

}

var hero = new Hero('batman.jpg', 30, 30, 150);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top + hero.size < 190){
    hero.moveRight();
  }else{
      if(hero.left >= window.innerWidth - hero.size && hero.top< window.innerHeight-hero.size){
        hero.moveDown();
      }
  }
  if(hero.left > 0 && hero.top> window.innerHeight-hero.size){
    hero.moveLeft();}
  if(hero.left <= 0 && hero.top> 0){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 400)
}

start();