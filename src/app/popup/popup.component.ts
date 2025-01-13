import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {
  isNice=false;
  isClicked=false;
  isPopupVisible:boolean=false;
  name:string='';
  constructor (public sharedService:SharedService){}
  ngOnInit(): void {
    this.sharedService.popupVisible$.subscribe(visible =>{
      this.isPopupVisible=visible;
      this.name=this.sharedService.Username;
    })
  }

  hidePopup(){
    this.sharedService.hidePopup();
  }

  SignIn(){
    this.isClicked=!this.isClicked;
  }
}
