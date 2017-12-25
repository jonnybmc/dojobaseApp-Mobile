import { StudentEditPage } from './../student-edit/student-edit';
import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Student } from '../../models/student';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage implements OnInit {
  student: Student;
  id:string;
  constructor(private navCtrl: NavController, private navParams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  ngOnInit(){
      this.student = this.navParams.get('student');
      this.id = this.student.studentId;
      console.log(this.student + '  '  + this.id);
  }

  onEditStudent(){
    this.navCtrl.push(StudentEditPage, {mode : 'Edit', student : this.student, id : this.id})
  }

}
