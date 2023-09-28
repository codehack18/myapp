import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {
  
 

  constructor(private fb: FormBuilder, private _http:HttpClient) {}
  my: FormGroup|any;

  ngOnInit(): void{}
  
  myForm = new FormGroup({
      firstName: new FormControl ('', [Validators.required]),
      lastName: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required,Validators.minLength(8)])
      // ... other form controls
    });

    get firstName(): FormControl{
      return this.myForm.get('firstName') as FormControl;
    }
    get lastName(): FormControl{
      return this.myForm.get('lastName') as FormControl;
    }
    get email(): FormControl{
      return this.myForm.get('email') as FormControl;
    }
    get password(): FormControl{
      return this.myForm.get('password') as FormControl;
    }

    onClick(){
      console.log(this.myForm.value)
      this.my = this.myForm.value.email
      this._http.post<any>("http://localhost:3000/posts", this.myForm.value).subscribe(res=>{
        alert('data added successfully');
        this.myForm.reset();
    }, err=> { 
       alert('something went wrong');
      })
    }
  }



