import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  toggleActive=false;
  product:any

  constructor(private sharedService:SharedService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
    const productId:string|null=this.route.snapshot.paramMap.get('id');
    if(productId){
      this.getProductDetails(productId);
    } else{
      console.error('Product Id is null or undefined')
    }
  }
  getProductDetails(id:string):void {
    this.sharedService.getProductById(id).subscribe((data) =>{
      this.product=data;
      console.log("coming",this.product)
    });
  }
  

}
