import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-second-try',
  templateUrl: './second-try.component.html',
  styleUrls: ['./second-try.component.css']
})
export class SecondTryComponent {
   
  newForm: FormGroup;

  usersData: any;

  constructor(private fb:FormBuilder){
    
    this.usersData = [];
    
    this.newForm = this.fb.group({
      name: ['' ,Validators.required],
      email: ['' ,[Validators.required,Validators.email]],
      number: ['', [Validators.required,Validators.maxLength(10)]],
      password: ['' ,Validators.required],
    })
  }

  getData(){
    if(this.newForm.valid){
      console.log(this.newForm);
    }
  }

  public subData(): void {
    this.usersData.push(this.newForm.value);
    this.newForm.reset();
    localStorage.setItem('user', JSON.stringify(this.usersData));

  }
  // showData(){
  //   this.usersData = localStorage.getItem('user');
  //   let user =JSON.parse(this.usersData);
  // }

  reMove(element){
    this.usersData.forEach((value, index) =>{
      if(value == element)
      this.usersData.splice(index, 1);
    })
  }
}
