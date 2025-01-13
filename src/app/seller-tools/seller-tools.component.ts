import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-seller-tools',
  templateUrl: './seller-tools.component.html',
  styleUrl: './seller-tools.component.css'
})
export class SellerToolsComponent {
  toggleActive= false;
  addproducts=false;
  name=false;
  discription=false;
  price=false;
    constructor(private sharedService:SharedService){}
  
    ngOnInit(): void {
      this.sharedService.toggleActive$.subscribe(value =>{
        this.toggleActive=value;
      })
    }

  onchange_name(){
    this.name=!this.name
  }
  onchange_discription(){
    this.discription=!this.discription
  }
  onchange_price(){
    this.price=!this.price;
  }

  addproduct(){
    this.addproducts=!this.addproducts
  }
  products=[
    {
      name:'',
      description:'',
      category:'',
      targetprice:null,
      units:null
    }
 ];

 addProduct(){
  this.products.push({
    name:'',
    description:'',
    category:'',
    targetprice:null,
    units:null,
  });
 }
}
