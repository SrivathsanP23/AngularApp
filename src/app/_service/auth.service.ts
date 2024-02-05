import { Injectable } from '@angular/core';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private core: CoreService) { }

  checkUserRegistered(userName: string) {

    return this.core.getData('users?user_name=' + userName)
  }
}
