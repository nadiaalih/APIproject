import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from '../model/doctor';
import { SharedservService } from './sharedserv.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends SharedservService<doctor> {

  constructor( public http:HttpClient) {
    super(http , "http://localhost:3000/doctor");


  }
}
