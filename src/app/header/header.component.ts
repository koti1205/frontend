import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  name: string='';
  isnice=false;
  toggleActive= false;
  istoggle=false;
  isChecked: boolean = false;

  onToggleChange() {
    console.log('Toggle state:', this.isChecked);
  }

   constructor(private sharedService:SharedService){}
   ngOnInit(){
     this.name=this.sharedService.Username;
   }

  onToggle(){
     this.sharedService.toggleActiveMethod();
  }
  toggle(){
    this.istoggle=!this.istoggle
    this.sharedService.isNiceMethod();
  }

  showPopUp(){
    this.sharedService.showPopup();
  }
}
