import { NavController } from 'ionic-angular/navigation/nav-controller';
import { StudentService } from './../../services/student.service';
import { StudentEditPage } from './../student-edit/student-edit';
import { Component } from '@angular/core';
import { IonicPage, NavParams} from 'ionic-angular';
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
  constructor(private navCtrl: NavController, private navParams:NavParams, private studentService:StudentService) {
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

  onDeleteStudent(){
    this.studentService.deleteStudent(this.student).subscribe(
        result => {
          this.navCtrl.popToRoot();},
        error => console.log(error)
    );
}

}
