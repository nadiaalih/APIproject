import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../model/student';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SharedservService<T> {

  constructor(public http :HttpClient ,@Inject(string)  public url: string) { }
 get() : Observable<T>{
 
  return this.http.get<T>(this.url);
}
post(body:T):Observable<T>{
return this.http.post<T>(this.url ,body);
}

delete(id:number):Observable<T>{

  return this.http.delete<T>(this.url+`/${id}`);
}
getById(id):Observable<T>{
return this.http.get<T>( this.url+`/${id}` );
}
update( id , body:T):Observable<T>{
  return this.http.put<T>(this.url+`/${id}` , body);
}
}

function Inject(string: any) {
  throw new Error('Function not implemented.');
}
