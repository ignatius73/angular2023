import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
   { 
    path: 'dashboard', 
    component: PagesComponent,

    children:[
          { path: '', component: DashboardComponent, data:{ title: 'Dashboard'}},
          { path: 'progress', component: ProgressComponent, data:{ title: 'Progress'} },
          { path: 'grafica1', component: Grafica1Component, data:{ title: 'Gráfica1'} },
          { path: 'account-settings', component: AccountSettingsComponent, data:{ title: 'Ajustes'} },
          { path: 'rxjs', component: RxjsComponent, data:{ title: 'Observables'} },
      ]
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
