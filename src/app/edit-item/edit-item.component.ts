import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {

  studentData: FormGroup;

  classData: any;

  constructor(private fb: FormBuilder) {

    this.classData = [];
    this.studentData = this.fb.group({
          
      name: ['', Validators.required],
      class: ['', Validators.required],
      rollno: ['', Validators.required],
      age: ['', Validators.required]
    })
  }
    public saveData(): void {
       this.classData.push(this.studentData.value)
       this.studentData.reset();
    }

    onCut(element){
      this.classData.forEach((value,index)=>{
        if(value == element)
         this.classData.splice(index,1);
      })
        
      
  
    }
  
  }

