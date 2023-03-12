import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../model/student';
import { SharedservService } from './sharedserv.service';

@Injectable({
  providedIn: 'root'
})
export class studentservice extends SharedservService<student> {

  constructor( public http:HttpClient ) {
super(http , "http://localhost:3000/student");

   }
}
