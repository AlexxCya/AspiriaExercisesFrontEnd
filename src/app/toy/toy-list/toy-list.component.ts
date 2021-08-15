import { Component, OnInit } from '@angular/core';
import { ApitoyService} from '../../services/apitoy.service';
import { DialogDeleteComponent } from '../../common/delete/dialogdelete.component';
import { MatDialog } from '@angular/material/dialog';
import { Toy } from '../../models/toy';
import { ToyFormComponent } from '../../toy/toy-form/toy-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.scss']
})
export class ToyListComponent implements OnInit {

  public lstToys: any[];
  public columnas: string[]= ['name', 'description', 'age', 'company', 'price', 'actions'];
  public countryId : number;
  readonly width: string = '600px';

  constructor(
    private _api: ApitoyService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.getToys();
  }

  getToys(){
    this._api.getToys().subscribe(res =>{
      this.lstToys= res.data;
    })
  }

  openAdd(){
    const dialogRef = this._dialog.open(ToyFormComponent, {
      width:this.width
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getToys();
    }) 
  }

  openEdit(toy: Toy){
    const dialogRef = this._dialog.open(ToyFormComponent, {
      width:this.width,
      data:{
        id: toy.id,
        name: toy.name,
        description: toy.description,
        age:toy.age,
        company:toy.company,
        price:toy.price
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getToys();
    }) 
  }

  
  delete(toy : Toy ){
    const dialogRef = this._dialog.open(DialogDeleteComponent, {
      width:this.width
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this._api.delete(toy.id).subscribe(response =>{
          if (response.data != undefined){
                this._snackBar.open('Successfully removed !!!','',{
                  duration:5000
                })
                this.getToys();
          }
        });
      }
    }) 
  }

}
