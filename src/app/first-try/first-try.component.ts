import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-first-try',
  templateUrl: './first-try.component.html',
  styleUrls: ['./first-try.component.css']
})
export class FirstTryComponent implements OnInit{
   session: any;


   getValue(){
    let items = { id: 1, name: 'abc' };

    localStorage.setItem('session', JSON.stringify(items));
  }


setValue(){
  let items: any = localStorage.getItem('session');
  this.session = JSON.parse(items);
}

  constructor() {}

  ngOnInit(): void {
    // this.apiService.getItems().subscribe(data => {
    //   this.items = data;
    // });
  }

  
}