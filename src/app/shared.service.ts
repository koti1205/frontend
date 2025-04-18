import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private toggleActive=new BehaviorSubject<boolean>(false);
  private isNice=new BehaviorSubject<boolean>(false)
  
  Username:string='koti';
  toggleActive$=this.toggleActive.asObservable();
  isNice$=this.isNice.asObservable();
 
  isNiceMethod(){
    this.isNice.next(!this.isNice.value);
  } 
  toggleActiveMethod(){
    // this.toggleActive.next(!this.toggleActive.value);
    this.toggleActive.next(true);
  }
  toggleInActiveMethod(){
    this.toggleActive.next(false);
  }

  private isPopupVisible =new BehaviorSubject<boolean>(false);

  popupVisible$= this.isPopupVisible.asObservable();

  showPopup(){
      this.isPopupVisible.next(true);
  }

  hidePopup(){
    this.isPopupVisible.next(false)
  }

  setPopupVisibility(isVisible:boolean){
    this.isPopupVisible.next(isVisible)
  }

  public products_api='https://dummyjson.com/products'
  constructor(public httpClient:HttpClient){

  }

  getproducts(){
    return this.httpClient.get(this.products_api)
  }
  getProductById(id:string){
    return this.httpClient.get(`${this.products_api}/${id}`);
  }
  
}
