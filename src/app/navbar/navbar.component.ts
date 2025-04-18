import { Component, Input} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleActive= false;
  toggleService =false;

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
  }
  onToggle(){
    this.sharedService.toggleActiveMethod();
  }
  closetoggle(){
    this.sharedService.toggleInActiveMethod();
  }
  addtoggle(){
      this.toggleService=!this.toggleService

  }
}