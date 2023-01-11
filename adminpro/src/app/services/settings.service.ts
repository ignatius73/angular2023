import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() { 
    const selectedTheme:string = localStorage.getItem('url') || './assets/css/colors/default-dark.css'
    this.theme?.setAttribute('href', selectedTheme)
  }

  changeTheme(color:string){
  
    const url = `./assets/css/colors/${color}.css`
  
   this.theme?.setAttribute('href', url)
  
   localStorage.setItem('url', url);
    
  
  }
}
