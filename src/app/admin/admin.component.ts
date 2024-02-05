import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  count = 0;
  theme = 'light';

  list = {
    name: 'test'
    , age: 20,

  }

  addItem(newItem: any) {
    this.count = newItem
  }



}
