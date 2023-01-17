import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Plate } from '../model/plate.model';
import { RegistrationListService } from '../shared/registration-list.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit, OnDestroy {
plates:Plate[] | undefined;
plateChangeSub : Subscription | undefined;

constructor(private rlService : RegistrationListService){}

ngOnInit(){
  this.plates = this.rlService.getPlates();
  this.plateChangeSub = this.rlService.plateChanged.subscribe(
    (plates:Plate[]) => {
      this.plates = plates;
    }
  )
}

onEditItem(index:number){
this.rlService.startedEditing.next(index);
}

onDeleteItem(index:number){
this.rlService.deletePlate(index);
}

ngOnDestroy(): void {
  this.plateChangeSub?.unsubscribe();
}
}
