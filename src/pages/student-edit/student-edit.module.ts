import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentEditPage } from './student-edit';

@NgModule({
  declarations: [
    StudentEditPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEditPage),
  ],
})
export class StudentEditPageModule {}
