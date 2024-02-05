import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../_service/loader-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoading: Subject<boolean> = this.loader.isLoading;
  constructor(private loader: LoaderService,) {

  }
}
