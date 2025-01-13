import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  numOtp=true;
  emailOtp=true;
  form: FormGroup;
  selectedOption: string='';

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({option:['option-1']})
  }

  onSelectionChange(value:string):
  void{
    this.selectedOption=value;
  }

  isNumActive(){
    this.numOtp=!this.numOtp;
  }
  isEmailactive(){
    this.emailOtp=!this.emailOtp;
  }

}
