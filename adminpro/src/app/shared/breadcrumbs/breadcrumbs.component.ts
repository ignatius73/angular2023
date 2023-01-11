import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { filter } from 'rxjs';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public breadcrumb: string = '';
  public titulosSub$: Subscription;
  constructor(
    private router: Router
  ){
    this.titulosSub$ = this.getBreadCrumb()
      .subscribe( ({title}) => this.breadcrumb = title );
  }
  
  ngOnDestroy(): void {
    this.titulosSub$.unsubscribe();
  }


  getBreadCrumb() {
    return this.router.events
    .pipe(
      filter( (ev): ev is ActivationEnd => ev instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd)=> event.snapshot.data)
        
    )
    
    
  }
}
