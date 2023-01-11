import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalo:Subscription;

  constructor(){
    this.intervalo = this.retornaIntervalo().subscribe(
      valor => console.log(valor)  
    )
  }
  ngOnDestroy(): void {
    this.intervalo.unsubscribe();
  }

  //Observable interval
  retornaIntervalo(){
     return interval(500)
      .pipe(
        filter( v => (v % 2==0) ? true : false),
        map( v => `Hola mundo ${v}`),
        //take(10), // take cantidad de ocurrencias
     );
  }

  retornaObservable():Observable<number>{

    let i = -1;

    return new Observable<number>( observer => {



    })




  }

  
}
