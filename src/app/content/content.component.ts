import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  isNice=false;
  toggleActive= false;
  isHovered=false;
  isBuyerView=true;
  productsData:any=[]

  constructor(public sharedService:SharedService, private router:Router){}

  ngOnInit(): void {
    this.setDefaultView();
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
    this.sharedService.isNice$.subscribe(value =>{
      this.isNice=value;
    })
    this.sharedService.getproducts().subscribe((response:any) => {
      this.productsData=response.products;
      console.log("Api called:::::",this.productsData)
    })
  }
  setDefaultView(){
    this.isBuyerView=true;
  }
  onProductClick(productId:string){
    this.router.navigate(['/product-page',productId])
  }

}
