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

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    StudentsPage,
    StudentPage,
    DashboardPage,
    StudentEditPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StudentsPage,
    StudentPage,
    DashboardPage,
    StudentEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    Camera,
    StudentService,
    HttpModule
  ]
})
export class AppModule {}
