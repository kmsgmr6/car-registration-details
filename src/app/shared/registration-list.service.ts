import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Plate } from '../model/plate.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationListService implements OnInit {

  plateChanged = new Subject<Plate[]>();
  startedEditing = new Subject<number>();

  private plates: Plate[]=[];

  private url = 'http://localhost:3000/plates';
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  setPlates(plates: Plate[]){
    this.plates = plates;
    this.plateChanged.next(this.getPlates());
  }

  
  getPlate(index:number){
    return this.plates[index];
  }

  getPlates(){
    return this.plates.slice();
  }

  fetchPlates(){
    this.http.get<Plate[]>(this.url).subscribe(
      plates =>{
        this.setPlates(plates);
      }
    )
  }

  addPlate(plate:Plate){
    this.http.post(this.url, plate).subscribe(
      responseData =>{
        console.log(responseData);
      }
    );
    this.plateChanged.next(this.getPlates());
  }

  updatePlate( newPlate : Plate){
    const plateUrl = `${this.url}/${newPlate.id}`;
    console.log(plateUrl);
    this.http.put(plateUrl, newPlate).subscribe(
      responseData => {
        console.log(responseData);
      }
    );
    this.plateChanged.next(this.getPlates());
  }

  deletePlate(index:number){
    const plateUrl = `${this.url}/${index}`;
    this.http.delete(plateUrl).subscribe(
      responseData =>{
        console.log(responseData);
      }
    );
    alert("Successfully Deleted")
    this.fetchPlates();
    this.plateChanged.next(this.getPlates());
  }
}
