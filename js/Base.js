class Base{
   constructor(x,y,w,h){

   
   let options = {
        isStatic:true 
    };


 this.body + Bodies.rectangle(x,y,w,h,options);
 this.w = w;
 this.h = h;
 World.add(world,this.body);
   }

  show(){
      let pos = this.body.positon;
      push();
      rectMode(center);
      noStroke();
      fill("gray");
      rect(pos.x,pos.y,this.w,this.h);
     pop()
  }
  











}