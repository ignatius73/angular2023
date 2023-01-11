import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  /*Para renombrar el argumento va entre los paréntesis el nuevo nombre*/
  /*Si no se renombra se identifica en el componente padre con el nombre de la propiedad*/
  /* El decorador input recibe un valor del componente padre*/
  @Input('valor')
  progreso:number = 30;

  @Output() valor:EventEmitter<number> = new EventEmitter();

  cambiaValor(valor:number){

    if( this.progreso >= 100 && valor >= 0){
      this.progreso = 100;
      this.valor.emit(this.progreso);
      return this.progreso;
    }
 
    if ( this.progreso <=0 && valor < 0){
      this.progreso = 0;
      this.valor.emit(this.progreso);
      return this.progreso;

    }

    this.progreso = this.progreso + valor;
    this.valor.emit(this.progreso);
    return  this.progreso;

  }
}
