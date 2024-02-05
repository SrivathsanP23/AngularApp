import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListPipe } from './_pipes/list.pipe';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './_service/auth-interceptor';
import { LoadInterceptor } from './_service/load-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, SharedModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
