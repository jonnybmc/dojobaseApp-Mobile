import { StudentPage } from './../student/student';
import { StudentService } from './../../services/student.service';
import { StudentEditPage } from './../student-edit/student-edit';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Student } from '../../models/student';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage implements OnInit {
  students : Student[] = [];
  constructor(private navCtrl : NavController, private studentService : StudentService) {

  }

  ionViewWillEnter(){
    this.studentService.getStudents()
    .subscribe(
      (students:Student[]) =>{
        this.students = students;
    }
    );
  }

  onNewStudent() {
    this.navCtrl.push(StudentEditPage,{
      mode: 'New'
    });
  }

  onLoadStudent(student:Student,index : number){
    this.navCtrl.push(StudentPage,{
      student:student,
      index : index
    });
  }
  
  ngOnInit(){
    this.studentService.getStudents()
    .subscribe(
      (students:Student[]) =>{
        this.students = students;
    }
    );
  }
}
