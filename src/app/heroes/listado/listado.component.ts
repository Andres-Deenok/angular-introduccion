import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: String[] = ['Thor', 'Genos', 'Saitama', 'Goku', 'Capitan America', 'America Sanchez', 'Rick Sanchez', 'Morty Smith'];
  heroeBorrado: string = '';

  borrarHeroe( ):void {
    console.log("Borranding...")

    this.heroeBorrado = this.heroes.unshift().toString();
    this.heroes.unshift();

  }

  agregarHeroe( name:string ):void {
    this.heroes.push(name);
  }

}
