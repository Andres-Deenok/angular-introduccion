import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',

})

export class ContadorComponent {

    title: string = 'Contador App';
    salutation = 'Hello there';
    numero: number = 10;
    based: number = 5;
  
    acumular( valor: number ) {
      this.numero += valor;
    }

}