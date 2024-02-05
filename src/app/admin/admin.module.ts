import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { TestDirective } from '../_directives/test.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TestDirective,
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, SharedModule, LayoutModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
