import {Component} from '@angular/core';

@Component ({
selector : 'massagordafim-component',
templateUrl : 'massagordafim.component.html'
})

export class MassaGordaFimComponent{
  a: number;
  b: number;
  c: number;
  x: number ;
  y: number;

  verificar(): void{
    let a = Number(this.a);
    let b = Number(this.b;
    let c = Number(this.c);
    let x = Number(this.x);
    let y = Number(this.y);

    if(a*x + b*y + c == 0){
      alert("Esse ponto pertence a reta!");
    }
    else if(a*x + b*y == 0 && c == 0){
      alert("Esse ponto pertence a reta!");
    }
    else if(a*x + c == 0 && b == 0){
      alert("Esse ponto pertence a reta!");
    }
    else if(b*x + c == 0 && a == 0){
      alert("Esse ponto pertence a reta!");
    }
    else{
      alert("Esse ponto não pertence a reta!");
    }

  }
}
