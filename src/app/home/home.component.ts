import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isBuyerView:boolean=true;

  ngOnInit(): void {
    this.showBuyerView();
  }

  showBuyerView(){
    this.isBuyerView=true;
  }
 
  
}