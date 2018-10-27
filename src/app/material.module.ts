import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import {MatButtonModule, MatToolbarModule, MatIconModule, 
  MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatDialogModule,
MatSnackBarModule, MatInputModule, MatPaginatorModule, MatTableModule,
MatSortModule, MatProgressSpinnerModule,
MatSelectModule, MatOptionModule, MatCheckboxModule,MatSlideToggleModule, MatRadioModule } 
from '@angular/material'

@NgModule({
  imports: [
   // CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatOptionModule, MatCheckboxModule, MatSlideToggleModule,
    MatRadioModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatOptionModule, MatCheckboxModule, MatSlideToggleModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModule { }
