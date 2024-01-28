import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, NgForm, Validators, AbstractControl, FormArray} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent{
 
  provinceArray: string[] = ['Punjab','Sind','KPK',];
  checkArray:FormArray|any;
  Probool:boolean=false;
   c:number = 0;
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
      txtnumber:['',[Validators.required,
      Validators.minLength(11),
  ] ],
     txtemail:['',
     [
      Validators.required,
      Validators.email ]
    ],
    accept:[false,Validators.requiredTrue ],
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
  
  console.log(e.target.value,e.target.checked);
  this.checkArray = this.myForm.get("province") as FormArray
  if (e.target.checked) 
  {
    this.c++;
    // this.Probool  = e.target.checked;
    this.checkArray.push(new FormControl(e.target.value));
  } 
  else 
  {
    
    let i: number = 0;
    this.checkArray.controls.forEach((item:any) => {
      if (item.value == e.target.value) {
       this.checkArray.removeAt(i);
         this.c--;
        return;
      }
      i++;
    });
  }

  if(this.c==1)
    {
      this.Probool = true;
    }
   if(this.c== 0)
   {
    this.Probool = false;
   }
}


submitForm()
{
  this.submmited = true;
  if(this.myForm.valid && this.Probool)
  {
    console.log(this.myForm.value)
    return;
  }
  else
  {
    // Convert the format into JSON format
    // console.log(JSON.stringify(this.myForm.value));
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
