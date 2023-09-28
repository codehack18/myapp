import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  userForm: FormGroup;
  myArr = [{
    "name": "amit",
    "email": "amit@gmail.com",
    "number": "8802546839",
    "password": "amit1234$hb",
  }]
  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  //  setData(){
  //    console.log(this.myArr)

  //    this.userForm.get('name').patchValue("amit");
  //    this.userForm.get('email').patchValue("amit@gmail.com");
  //    this.userForm.get('number').patchValue("880256748");
  //    this.userForm.get('password').patchValue("amit1234$")

  //    //Dynamic
  //    this.userForm.get('name').patchValue(this.myArr[0].name);
  //    this.userForm.get('email').patchValue(this.myArr[0].email);
  //    this.userForm.get('number').patchValue(this.myArr[0].number);
  //    this.userForm.get('password').patchValue(this.myArr[0].password);
  //  }
  onSave() {
    if (this.userForm.valid) {
      console.log(this.userForm)

      this.userForm.reset();
    }
  }

  }
