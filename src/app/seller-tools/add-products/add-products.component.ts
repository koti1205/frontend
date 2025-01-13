import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
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

