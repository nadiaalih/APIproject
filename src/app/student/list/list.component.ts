import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model/student';
import { SharedservService } from 'src/app/services/sharedserv.service';
import { studentservice } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
students :student = new student();
  constructor( public serv : studentservice) { 

this.serv.get().subscribe ((data:student)=>{

this.students=data;
});

}
delete(id:number){
  this.serv.delete(id).subscribe((data:student)=>{
window.location.reload();

  });
}
  }



