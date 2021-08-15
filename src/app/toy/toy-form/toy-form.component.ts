import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApitoyService } from 'src/app/services/apitoy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Toy } from 'src/app/models/toy';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-toy-form',
  templateUrl: './toy-form.component.html',
  styleUrls: ['./toy-form.component.scss']
})
export class ToyFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ToyFormComponent>,
    public _api: ApitoyService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public toy: Toy
  ) {
    if (this.toy !== null){
      //console.log(this.country);
      this.toyForm.patchValue(this.toy);
    }
  }
  ;
  public toyForm = this.fb.group(
    {
      name: ['',{ validators: [Validators.required, Validators.maxLength(50)]}],
      description:['',{ validators: [Validators.maxLength(100)]}],
      age: ['',{ validators: [Validators.min(0), Validators.max(100)]}],
      company: ['',{ validators: [Validators.required, Validators.maxLength(50)]}],
      price: ['',{ validators: [Validators.required, Validators.min(1), Validators.max(1000)]}],

    }
  );

  ngOnInit(): void {
  }
  add(){
    this._api.add(this.toyForm.value).subscribe(res =>{
        if (res.data !== undefined){
            this.dialogRef.close();
            this.snackBar.open("Successfully Inserted Toy", '',{
              duration: 5000
            });
        }
    })
  }

  edit(){
    this._api.edit(this.toyForm.value, this.toy.id).subscribe(res =>{
      if (res.data !== undefined){
            this.dialogRef.close();
            this.snackBar.open("Successfully Edited Toy", '',{
              duration: 5000
            });
        }
    })
}
  close(){
    this.dialogRef.close();
  }

  getErrorByField(){
      var name = this.toyForm.get('name');
      if (name.hasError('required')){
        return 'required';
      }
      if (name.hasError('maxlength')){
        return 'exceeds the allowed length';  
      }  
      var description = this.toyForm.get('description');
      if (description.hasError('maxlength')){
        return 'exceeds the allowed length';  
      }  
      var age = this.toyForm.get('age');
      
      if (age.hasError('max')){
        return 'exceeds the allowed max';  
      }  
      var company = this.toyForm.get('company');
      if (company.hasError('required')){
        return 'required';
      }
      if (company.hasError('maxlength')){
        return 'exceeds the allowed length';  
      }  

      var price = this.toyForm.get('price');
      if (price.hasError('required')){
        return 'required';
      }
      if (price.hasError('max')){
        return 'exceeds the allowed length max';  
      }  
  }


}
