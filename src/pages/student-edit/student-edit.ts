import { StudentService } from './../../services/student.service';
import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/student';
import { FormControl } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@IonicPage()
@Component({
  selector: 'page-student-edit',
  templateUrl: 'student-edit.html',
})
export class StudentEditPage implements OnInit {
  mode = 'New';
  selectOptions = ['Male', 'Female'];
  studentForm : FormGroup;
  student : Student;
  id : number;
  constructor(private navParams : NavParams, private studentService : StudentService, private navCtrl : NavController) {

  }

  ngOnInit(){
      this.mode = this.navParams.get('mode');
      if (this.mode == 'Edit') {
        this.student = this.navParams.get('student');
        
    }

      //initialize default values
      let firstName = null;
      let lastName = null;
      let gender = 'Male';
      let contactNumber = null;
      let email = null;
      let dateOfBirth = null;
      let streetAddress = null
      let city = null;
      let zipCode = null;
      let rank = null;


      if (this.mode == 'Edit') {
        firstName = this.student.firstName;
        lastName = this.student.lastName;
        gender = this.student.gender;
        contactNumber = this.student.contactNumber;
        email = this.student.email;
        dateOfBirth = this.student.dateOfBirth;
        streetAddress = this.student.streetAddress;
        city = this.student.city;
        zipCode = this.student.zipCode;
        rank = this.student.rank;
      }

        
    
      this.studentForm = new FormGroup({
        firstName : new FormControl(firstName,Validators.required),
        lastName : new FormControl(lastName,Validators.required),
        gender : new FormControl(gender,Validators.required),
        contactNumber : new FormControl(contactNumber,Validators.required),
        email: new FormControl(email,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),  
        dateOfBirth : new FormControl(dateOfBirth,Validators.required),
        streetAddress : new FormControl(streetAddress,Validators.required),
        city : new FormControl(city,Validators.required),
        zipCode : new FormControl(zipCode,Validators.required),
        rank : new FormControl(rank,Validators.required)
      });
  }

  onSubmit() {
    const student = new Student(
      this.studentForm.value.firstName,
      this.studentForm.value.lastName,
      this.studentForm.value.gender,
      this.studentForm.value.dateOfBirth,
      this.studentForm.value.streetAddress,
      this.studentForm.value.city,
      this.studentForm.value.zipCode,
      this.studentForm.value.rank,
      this.studentForm.value.contactNumber,
      this.studentForm.value.email
    );

    if (this.mode == 'Edit') {
      this.studentService.updateStudent(this.student).subscribe(
        (student:Student) => {
          this.student = student;
      }
      );
    } else {
      this.studentService.addStudent(student)
      .subscribe(
          data => console.log(data),
          error => console.log(error)
      );
    } 
    this.studentForm.reset();
    this.navCtrl.popToRoot();
  }

}
