import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.css'
})
export class HelpCenterComponent {
  toggleActive=false;

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
  }

}
