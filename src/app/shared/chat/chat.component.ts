import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() name: any;
  @Output() newItemEvent = new EventEmitter<number>();
  count = 0;


  addNewItem() {
    this.newItemEvent.emit(this.count + 1);
    this.count = this.count + 1
  }
}
