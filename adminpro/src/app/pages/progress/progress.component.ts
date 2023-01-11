import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

  

  progreso1: number = 22;

  progreso2: number = 33;

  get getProgreso1(){
    return `${this.progreso1}%`;

  }
  get getProgreso2(){
    return `${this.progreso2}%`;
  }

  cambioValorHijo(valor:number){
    
  
  }



}
