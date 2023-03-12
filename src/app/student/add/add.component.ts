import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model/student';
import { SharedservService } from 'src/app/services/sharedserv.service';
import { studentservice } from 'src/app/services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  students :student=new student();

  constructor(public serv :studentservice) { }
post(){

this.serv.post(this.students).subscribe
((data:student)=>{
  window.location.reload();   
}
);



}




  }


