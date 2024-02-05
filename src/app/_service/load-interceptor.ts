export interface LoadInterceptor {
}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';


import { finalize } from "rxjs/operators";
import { LoaderService } from './loader-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoadInterceptor implements HttpInterceptor  {

  constructor(private loader: LoaderService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('loading');
    
    this.loader.show()
    return next.handle(req).pipe(
     
      finalize(() =>{ ;
       this.loader.hide()})
    );

  }
}