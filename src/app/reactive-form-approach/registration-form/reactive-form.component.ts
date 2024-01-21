import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, NgForm, Validators, AbstractControl, FormArray} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent{
 
  provinceArray: string[] = ['Punjab','Sind','KPK',];
  
  constructor (private fb:FormBuilder){}

    myForm = this.fb.group({
      txtfirstname: ['',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)],
      ],
      txtsecondname:['',Validators.required ],
      dob:['',Validators.required ],
      rdgender:['',Validators.required ],
      slcourse:['',Validators.required ],
      province:this.fb.array([]),
      txtaddress:['',Validators.required ],
      txtnumber:['',Validators.required ],
     txtemail:['',
     [
      Validators.required,
      Validators.email ]
    ],
    accept:['',Validators.requiredTrue ],
    });
   
  submmited = false;


ngOnInit():void
{
  
}
get f(): { [key: string]: AbstractControl } {
  return this.myForm.controls;
}

onChange(e:any)
{
  console.log(e.target.value,e.target.checked)
  const checkArray = this.myForm.get("province") as FormArray
  if (e.target.checked) 
  {
    checkArray.push(new FormControl(e.target.value));
  } 
  else 
  {
    let i: number = 0;
    checkArray.controls.forEach((item) => {
      if (item.value == e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }
}


submitForm()
{
  this.submmited = true;

  if(this.myForm.invalid)
  {
    console.log(this.myForm.value)
    return;
  }
  else
  {
    console.log(JSON.stringify(this.myForm.value));
  }
  // this.firstname =  this.myForm.get('txtfirstname')?.value;
  // console.log(form.controls.txtfirstname.value);
 
  // console.log(form.controls.txtaddress.value);

}

resetForm()
{
  this.submmited = false;
  this.myForm.reset();
}
}
