import { Component, OnInit } from '@angular/core';

import { Plate } from '../model/plate.model';
import { RegistrationListService } from '../shared/registration-list.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
plates:Plate[] | undefined;

constructor(private rlService : RegistrationListService){}

ngOnInit(){
  this.plates = this.rlService.getPlates();
  this.rlService.plateChanged.subscribe(
    (plates:Plate[]) => {
      this.plates = plates;
    }
  )
}

}
