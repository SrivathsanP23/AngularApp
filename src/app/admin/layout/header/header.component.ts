import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/_service/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private snackBar: MatSnackBar, private coreService: CoreService) { }

  ngOnInit() {

  }

  logout() {
    this.setLoginActivity();
    localStorage.clear();
    this.snackBar.open('Logout Successfully!', 'success');
    this.router.navigate(['auth'])
  }

  setLoginActivity() {
    var sendData = {
      name: localStorage.getItem('user_name'),
      date: new Date(),
      type: 'Logout'
    }
    this.coreService.postData('loginActivity', sendData).subscribe(res => {
    })
  }
}
