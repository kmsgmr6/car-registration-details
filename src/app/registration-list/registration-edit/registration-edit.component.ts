import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Plate } from 'src/app/model/plate.model';
import { RegistrationListService } from 'src/app/shared/registration-list.service';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') rlForm: NgForm | undefined;
  subscription: Subscription | undefined;
  editMode = false;
  editedItemIndex : number | undefined;
  editedItem : Plate | undefined;
  
  constructor(private rlService: RegistrationListService){}

  ngOnInit(){
    this.rlService.startedEditing.subscribe(
      (index:number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.rlService.getPlate(index);
        this.rlForm?.setValue({
          name:this.editedItem.name,
          numberPlate: this.editedItem.numberPlate
        })
      }
    );
  }

  onSubmit(form:NgForm){
    const value=form.value;
    const newPlate = new Plate(value.name,value.numberPlate);
    if(this.editMode){
      this.rlService.updatePlate(this.editedItemIndex!, newPlate);
    }else{
      this.rlService.addPlate(newPlate);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.rlForm?.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
  this.subscription?.unsubscribe();
  }
}
