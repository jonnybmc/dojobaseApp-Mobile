import { Ingredient } from './../../models/ingredient';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/dashboard.service';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  listItems:Ingredient[] = [];
  constructor(private shoppingListService : ShoppingListService) {
  }

  ionViewWillEnter(){
    this.loadItems();
  }
  onAddItem(form:NgForm) {
    this.shoppingListService.addItem(form.value.ingredientName,form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index:number){
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  private loadItems(){
    this.listItems = this.shoppingListService.getItems();
  }


}
