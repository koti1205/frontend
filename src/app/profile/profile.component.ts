import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  toggleActive=false;

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.toggleActive$.subscribe(value =>{
      this.toggleActive=value;
    })
  }

}
// const productId:string|null=this.route.snapshot.paramMap.get('id');
    // if(productId){
    //   alert(productId);
    //   this.getProductDetails(productId);
    // } else{
    //   console.error('Product Id is null or undefined')
    // }
    
  
  // getProductDetails(id:string):void {
  //   this.sharedService.getProductById(id).subscribe((data) =>{
  //     this.product=data;
  //   });
  // }

