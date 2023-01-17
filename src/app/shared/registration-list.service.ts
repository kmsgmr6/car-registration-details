import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Plate } from '../model/plate.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationListService {

  plateChanged = new Subject<Plate[]>();
  startedEditing = new Subject<number>();

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
    this.plateChanged.next(this.plates.slice());
  }

  getPlate(index:number){
    return this.plates[index];
  }

  updatePlate(index:number, newPlate : Plate){
    this.plates[index]= newPlate;
    this.plateChanged.next(this.plates.slice());
  }

  deletePlate(index:number){
    this.plates.splice(index,1);
    this.plateChanged.next(this.plates.slice());
  }
}
