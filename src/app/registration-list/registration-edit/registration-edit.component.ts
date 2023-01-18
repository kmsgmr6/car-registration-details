import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  editedItemIndex: number | undefined;
  editedItem: Plate | undefined;
  plates: Plate[] = [];
  plateChangeSub: Subscription | undefined;
  addPlate: boolean = true;
  diffName: boolean = true;

  constructor(private rlService: RegistrationListService) { }

  ngOnInit() {
    this.rlService.fetchPlates();
    this.plateChangeSub = this.rlService.plateChanged.subscribe(
      (plates: Plate[]) => {
        this.plates = plates;
      }
    )

    this.rlService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.rlService.getPlate(index);
        this.rlForm?.setValue({
          name: this.editedItem.name,
          numberPlate: this.editedItem.numberPlate
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      const newPlate = new Plate(this.editedItem!.id, value.name, value.numberPlate);
      this.checkExistingPlates(value)
      if (this.addPlate == true || this.diffName == true) {
        this.rlService.updatePlate(newPlate);
        alert("Successfully Updated")
        this.ngOnInit();
      }
      else {
        alert("already exists")
      }
    }
    else {
      const newPlate = new Plate(Math.random(), value.name, value.numberPlate);

      this.checkExistingPlates(value)
      if (this.addPlate == true) {
        this.rlService.addPlate(newPlate);
        alert("Successfully added");
        this.ngOnInit();
      }
      else {
        alert("already exists")
      }

    }
    this.editMode = false;
    form.reset();
  }

  checkExistingPlates(value: { name: string; numberPlate: string; }) {
    this.addPlate = true;
    this.diffName = true;
    this.plates.forEach(x => {

      if (this.editMode) {

        if (x.id == this.editedItem!.id) {

          if (x.name == value.name) {
            this.diffName = false;
          }
        }

      }
      if (x.numberPlate.toUpperCase() == value.numberPlate.toUpperCase()) {
        this.addPlate = false;
      }

    });
  }

  onClear() {
    this.rlForm?.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
