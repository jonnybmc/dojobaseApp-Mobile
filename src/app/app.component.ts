import { AuthService } from './../services/auth.service';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  signinPage:any = SigninPage;
  signupPage:any = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl : MenuController, private authService : AuthService,public events:Events) {
    
    platform.ready().then(() => {
      if (localStorage.getItem('token') == null){
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
      }
      events.subscribe('user:loggedin', () =>{
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
        this.nav.setRoot(TabsPage);
      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }





}

