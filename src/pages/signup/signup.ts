import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  constructor(private authService:AuthService, private loadingCtrl:LoadingController, private alertCtrl : AlertController) {
  }
  ngOnInit(){
    this.signupForm = new FormGroup({
      firstName : new FormControl(null,Validators.required),
      lastName : new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),  
      password : new FormControl(null,Validators.required)
 });
  }

  onSubmit(){
    // console.log(this.myForm);
    const loading = this.loadingCtrl.create({
      content : 'Signing you up...'
    });
    loading.present();
    const user = new User(
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.firstName,
        this.signupForm.value.lastName
        );
    this.authService.signup(user)
    .subscribe(
        data => {
          loading.dismiss();
        },
        error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title : 'Oops Signup failed',
            message : error.error.message,
            buttons: ['OK']
          });
          alert.present();
          console.log(error);
        }
    );
    this.signupForm.reset();
}

}
