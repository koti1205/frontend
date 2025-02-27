import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  individualForm:FormGroup;
  companyForm:FormGroup;
  selectedTabIndex=0;
  numOtp=true;
  emailOtp=true;
  // form: FormGroup;
  selectedOption: string='';
  responseMessage: string='';
  data:any;

  constructor(private fb:FormBuilder, private apiService:ApiService){
    //individualform
    this.individualForm=this.fb.group({
        firstname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        lastname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        state: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        city: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        Address1: ['', Validators.required],
        Address2: [''],//optional field
        RegisterAs: ['', Validators.required],
    }, {validators : this.passwordMatchValidator });
      
    //companyform
    this.companyForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });

    // this.form=this.fb.group({option:['option-1']})
  }
  onTabChange(event: any){
    this.selectedTabIndex=event.index;
  }

  // onUserTypeChange(event:any){
  //   this.selectedUserType=event.target.value;

  //   if(this.selectedUserType === 'Individual'){
  //     this.signupForm.get('individualForm')?.enable();
  //     this.signupForm.get('companyForm')?.disable();
  //   }else {
  //     this.signupForm.get('companyForm')?.enable();
  //     this.signupForm.get('individualForm')?.disable();
  //   }
  // }


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

  passwordMatchValidator(group:FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value
      ? null : { mismatch : true };
  }
  

  onSubmit(){
    if (this.individualForm.valid) {
      this.apiService.postData(this.individualForm.value).subscribe(
        (response)=>{
          this.responseMessage='Data successfully sent to server!';
          console.log('Post Response:',response)
        },
        (error)=>{
          console.log('Error in Sending data:', error);
          this.responseMessage='Failed to send data!';
        }
      );
      
      // console.log('Form Submitted:',this.signupForm.value);
     } //else {
    //   console.log('Form is koti.')
    //  }
  }

}
