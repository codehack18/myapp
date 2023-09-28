import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css']
})
export class ThirdFormComponent {


title = 'myapp';

  userForm: FormGroup

  userData: any; 
  // user: 'i am amit';
  // id: number;
  // name: string;
 
  // langu =[
  //   {id:1 , name:"HTML" , comment:"good"},
  //   {id:2 , name:"CSS" , comment:"easy"},
  //   {id:3 , name:"BootStrap" , comment:"very easy"},
  //   {id:4 , name:"JavaScript" , comment:"little hard"},
  //   {id:5 , name:"Angular" , comment:"excllent"},
  // ]
    searchText = '';

    // datas: Data[] = [];
    // newDataName: string = '';

    // addData() {
    //   const newData: Data = {
    //     id: this.datas.length + 1,
    //     name: this.newDataName
    //   };

    //   this.datas.push(newData);
    //   this.newDataName = '';
    // }
  constructor(private fb: FormBuilder){
    
    this.userData = [];

    this.userForm = this.fb.group({
      name: ['' , Validators.required],
      comment: ['' ,Validators.required]
    })
    // setTimeout(() =>{
    //   this.title = 'not ready for run';
    // } ,3000);
  }

  public addData(): void {
    this.userData.push(this.userForm.value);
    this.userForm.reset();
  }
  
  forDelete(element){
    this.userData.forEach((value,index)=>{
      if(value == element)
       this.userData.splice(index,1);
    })
      
    

  }

  // ngOnInit(): void{
  //   this.apiService.getData().subscribe(
  //     (response) => {
  //       this.user = response;
  //     },
  //     (error) => {
  //       console.error('Error Data:', error);
  //     }
  //   );
  // }
}
