import { StudentsPage } from './../students/students';
import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  dashboard = DashboardPage;
  studentsPage = StudentsPage;
  constructor() {
  }
}
