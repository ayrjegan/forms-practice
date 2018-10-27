import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  ticketForm : FormGroup;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  buildForm(){
    this.ticketForm = this.formBuilder.group({
       Id:'',
       TenantId:'',
       TicketId:'',
       RaisedBy:'',
       Description:'',
       RaisedThrough:'',
       assignedto:'',
       RaisedAt:'',
       AssignedAt:'',
       Assignedby:'',
       Status:'',
       Priority:'',
       Response:'',
       Remarks:'',
       Createdby:'',
       CreatedTimeStamp:'',
       Modifiedby:'',
       ModifiedTimeStamp:''
    });
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm(); 
  }

}
