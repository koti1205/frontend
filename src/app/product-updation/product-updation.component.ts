import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-updation',
  templateUrl: './product-updation.component.html',
  styleUrl: './product-updation.component.css'
})
export class ProductUpdationComponent {
  toggleActive= false;
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
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
