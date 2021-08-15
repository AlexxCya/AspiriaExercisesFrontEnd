import { Component, OnInit } from '@angular/core';
import { ApifoodService} from '../../services/apifood.service';
import { DialogDeleteComponent } from '../../common/delete/dialogdelete.component';
import { MatDialog } from '@angular/material/dialog';
import { Toy } from '../../models/toy';
import { ToyFormComponent } from '../../toy/toy-form/toy-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  selectedDay:number=0;
  public lstFoods: any[];
  public columnas: string[]= ['applicant', 'locationDesc', 'start', 'end'];
  days: object[] =[
     {value:1, text:'Monday'},
     {value:2, text:'Tuesday'},
     {value:3, text:'Wednesday'},
     {value:4, text:'Thursday'},
     {value:5, text:'Friday'},
     {value:6, text:'Saturday'},
     {value:7, text:'Sunday'}
    
  ]
  time = {hour: 13, minute: 30};

  constructor(
    private _api: ApifoodService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  search(){
    //alert(this.selectedDay);
    this.getFoods();
  }

  getFoods(){
    this._api.getFoods(this.selectedDay, this.time.hour.toString() + ':' + this.time.minute.toString()).subscribe(res =>{
      this.lstFoods= res.data;
    })
  }
}
