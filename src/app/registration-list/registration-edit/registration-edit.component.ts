import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent {

  @ViewChild('nameInput') nameInputRef:ElementRef | undefined;
  @ViewChild('plateInput') plateInputRef:ElementRef | undefined;
  
  constructor(){}

  ngOnInit(){}

  onAddItem(){

  }
}
