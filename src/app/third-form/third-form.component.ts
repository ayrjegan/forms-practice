import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

  @Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css']
})
export class ThirdFormComponent implements OnInit {
     displayedcolumns : String[]=['position','name','address','phoneno'];
     dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

     @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name:string;  
  position:number;
  address:string;
  phoneno:string; 
}
const ELEMENT_DATA: PeriodicElement[] = [
   {position: 1 ,name:'mano',address:'madurai',phoneno:'887255466'},
   {position: 2 ,name:'vijay',address:'chennai',phoneno:'965245452'},
   {position: 3 ,name:'raj',address:'kovai',phoneno:'825445452'},
   {position: 4 ,name:'saran',address:'trichy',phoneno:'9842145247'},
   {position: 5 ,name:'bala',address:'vellur',phoneno:'805643258'},
   {position: 6 ,name:'vera',address:'thiruvanamalai',phoneno:'69852544'},
   {position: 7 ,name:'manokar',address:'kanchipuram',phoneno:'98542452'},
   {position: 8 ,name:'tamilselvan',address:'cuddalore',phoneno:'8241824156'},
   {position: 9 ,name:'madhu',address:'neyveli',phoneno:'9843984356'},
   {position: 10 ,name:'suriya',address:'chithamparam',phoneno:'805643569'},
  ];