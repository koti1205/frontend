import { Component, input, NgModule, OnInit, output, signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  showHeaderAndNav:boolean=true;

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.showHeaderAndNav=!event.url.includes('SignUp');
      }
    })
  }
  title = 'Artha';

}
