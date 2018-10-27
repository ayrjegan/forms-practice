import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name:string;  
  position:number;
    
}
const ELEMENT_DATA: PeriodicElement[] = [
   {position: 1 ,name:'mano'},
   {position: 2 ,name:'vijay'},
  
];

  @Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css']
})
export class ThirdFormComponent implements OnInit {
     displayedcolumns:String[]=['position','name'];
     datasource=ELEMENT_DATA;
   
  constructor() { }

  ngOnInit() {
  }

}
