import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Plate } from 'src/app/model/plate.model';
import { RegistrationListService } from 'src/app/shared/registration-list.service';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent {

  @ViewChild('nameInput') nameInputRef:ElementRef | undefined;
  @ViewChild('plateInput') plateInputRef:ElementRef | undefined;

  constructor(private rlService: RegistrationListService){}

  ngOnInit(){}

  onAddItem(){
    const uname= this.nameInputRef?.nativeElement.value;
    const unumberPlate = this.plateInputRef?.nativeElement.value;
    const newPlate = new Plate(uname,unumberPlate);
    this.rlService.addPlate(newPlate);
  }
}
