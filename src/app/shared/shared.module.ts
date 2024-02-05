import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[ChatComponent,MaterialModule],
})
export class SharedModule { }
