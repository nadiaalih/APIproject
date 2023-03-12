import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/model/student';
import { SharedservService } from 'src/app/services/sharedserv.service';
import { studentservice } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {
students :student=new student();
id;
  constructor( public active:ActivatedRoute , public serv:studentservice) { 

this.id= this.active.snapshot.paramMap.get('id');
this.serv.getById(this.id).subscribe((data:student)=>{
this.students=data ;

});

  }
  update(){
    this.serv.update(this.id,this.students).subscribe((data:student)=>{
     window.location.reload();
    });
  }

  ngOnInit(): void {
  }

}
