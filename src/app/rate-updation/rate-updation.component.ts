import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-updation',
  templateUrl: './rate-updation.component.html',
  styleUrl: './rate-updation.component.css'
})
export class RateUpdationComponent {
 isactive=false;
 isActive=false;
 S_productPrice:string='Rs6/kg'
 B_productPrice:string='Rs7/Kg'
 S_newPrice:string=''
 B_newPrice:string=''

 B_updatePrice(){
  if (this.B_newPrice.trim() !==''){
    this.B_productPrice=this.B_newPrice;
    this.B_newPrice=''
  }
   this.isActive=!this.isActive
 }

 S_updatePrice(){
  if (this.S_newPrice.trim() !==''){
    this.S_productPrice=this.S_newPrice;
    this.S_newPrice=''
  }
   this.isactive=!this.isactive
 }


}
