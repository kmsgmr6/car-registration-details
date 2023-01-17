import { Component, OnInit } from '@angular/core';

import { Plate } from '../model/plate.model';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
plates:Plate[] = [
  new Plate('Raju', 'ABC123'),
  new Plate('Abhi', 'BDC123')
];

constructor(){}

ngOnInit(){}

}
