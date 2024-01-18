import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';    

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  submitReg(regForm:any)
  {
  console.log(regForm.value); 
  }

}
