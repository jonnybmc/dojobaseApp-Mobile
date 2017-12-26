import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { StudentEditPage } from './../pages/student-edit/student-edit';
import { StudentPage } from './../pages/student/student';
import { StudentsPage } from './../pages/students/students';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ShoppingListService } from '../services/dashboard.service';
import { Camera } from '@ionic-native/camera';
import { StudentService } from '../services/student.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    StudentsPage,
    StudentPage,
    DashboardPage,
    StudentEditPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StudentsPage,
    StudentPage,
    DashboardPage,
    StudentEditPage,
    SigninPage,
    SignupPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    Camera,
    StudentService,
    HttpModule,
    AuthService
  ]
})
export class AppModule {}
