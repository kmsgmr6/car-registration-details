import { EventEmitter, Injectable } from '@angular/core';

import { Plate } from '../model/plate.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationListService {

  plateChanged = new EventEmitter<Plate[]>();

  private plates: Plate[] = [
    new Plate('Raju', 'ABC123'),
    new Plate('Abhi', 'BDC123')
  ];
  
  constructor() { }

  getPlates(){
    return this.plates.slice();
  }

  addPlate(plate:Plate){
    this.plates.push(plate);
    this.plateChanged.emit(this.plates.slice());
  }
}
