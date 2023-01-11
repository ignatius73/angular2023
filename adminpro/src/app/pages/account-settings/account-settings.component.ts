import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent{

  public theme = document.querySelector("#theme");


constructor(
  private settingsService:SettingsService
){}
    
  

  changeTheme(color:string){
    this.settingsService.changeTheme(color)
  }

}
