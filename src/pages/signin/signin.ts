import { StudentsPage } from './../students/students';
import { AuthService } from './../../services/auth.service';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { User } from '../../models/user';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
  signinForm:FormGroup;
  constructor(private authService : AuthService,private loadingCtrl : LoadingController, private alertCtrl : AlertController, private navCtrl:NavController,public events:Events) {
  }

  ngOnInit(){
    this.signinForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),  
      password : new FormControl(null,Validators.required)
 });
  }

  onSubmit(){
    const loading = this.loadingCtrl.create({
      content : 'Signing you in...',
    });
    loading.present();
    const user = new User(
        this.signinForm.value.email,
        this.signinForm.value.password
    );
    this.authService.signin(user)
    .subscribe(
        data => {
            loading.dismiss();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.events.publish('user:loggedin');
            // this.navCtrl.push(StudentsPage);
        },
        error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title : 'Signin failed',
            message : error.error.message,
            buttons : ['OK']
          });
          alert.present();
          console.error(error)
        }
    );
    // console.log(this.myForm);
    this.signinForm.reset();
}
  
}
