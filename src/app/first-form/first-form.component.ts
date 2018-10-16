import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  // Step 1 - create form variable with type FormGroup
  firstForm : FormGroup;
  // Step 2 - Go to html and create Form Tags Ex: <form> </form>
  // Step 3 - in form tag, add one attribute called [formGroup] and assign the form variable. 
  //          Here firstForm is the form variable.

  // Step 4 - Now we need to add controls. Before that create a method to build the form as follows
  //          Dependency FormBuilder is required, define that in constructor. Check constructor.
  buildForm(){
    this.firstForm = this.formBuilder.group({
        firstname:'',
        lastname:'',
        email:'',
        mobileno:'',
        address:''
    });
  }
  // Step 5, call this method buildForm in ngOnInit()

  // Step 6, add a control
  //        Add a control variable in the buildForm() methoud under group.
  //        Example firstname
  // Step 7, now go to HTML and create your form field 
  //        Example firstname is given as [formControlName] in the Input box
  // Now add additional attributes to the control. Example placeholder, aria-label or any other
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

}
