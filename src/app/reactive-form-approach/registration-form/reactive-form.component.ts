import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent{

  myForm:FormGroup; 

  firstname :string = "";

constructor (formbuilder:FormBuilder)
{
    this.myForm = formbuilder.group({
      txtfirstname: ['',Validators.required ],
      txtsecondname:['',Validators.required ],
      dob:['',Validators.required ],
      rdgender:['',Validators.required ],
      slcourse:['',Validators.required ],
      Punjab:['',Validators.required ],
      Sind:['',Validators.required ],
      KPK:['',Validators.required ],
      txtaddress:['',Validators.required ],
      txtnumber:['',Validators.required ],
    });
}
ngOnInit()
{
  
}
submitForm(form:any)
{
  // this.firstname =  this.myForm.get('txtfirstname')?.value;
  // console.log(form.controls.txtfirstname.value);
 
  console.log(form.controls.value);

  // console.log(this.myForm.value);

  
}

resetForm()
{
  this.myForm.reset();
}
}
