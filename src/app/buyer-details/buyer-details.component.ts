import { Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrl: './buyer-details.component.css'
})
export class BuyerDetailsComponent implements OnInit {
  productsData:any=[]

  constructor(public sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.getproducts().subscribe((response:any) => {
      this.productsData=response.products;
      console.log("Api called:::::",this.productsData)
    })
  }
  
}
