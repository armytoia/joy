import {Component} from '@angular/core';

@Component ({
selector : 'massagordameio-component',
templateUrl : 'massagordameio.component.html'
})

export class MassaGordaMeioComponent{
  nome : string;
  idade: number = 0;
  telefone: number = 0;
  email: string;
  senha: string;
  confsenha: string;


  sim(): void{
    alert("Parabéns! Rumo a uma vida melhor");
  }
  nao():void{
    alert("Não perca mais tempo e comece enquanto há tempo!");
  }
  cadastrar(): void{
    let idade = Number(this.idade);
    let telefone = Number(this.telefone);
    if(senha =! confsenha){
      alert("Confira sua senha novamente")  
    }else{
      alert("Cadastro realizado com sucesso!");
    }
  }
}
