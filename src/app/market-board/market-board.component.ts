import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-market-board',
  templateUrl: './market-board.component.html',
  styleUrl: './market-board.component.css'
})
export class MarketBoardComponent {
  toggleActive= false;
  Isvisibule=false;
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
  }
  display(){
    this.Isvisibule=!this.Isvisibule;
  }
}
