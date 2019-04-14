import {Component} from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private as: AuthService) {
  }
  login() {
    this.as.login();
  }
  logout() {
    this.as.logout();
  }

  getIsLoggedIn(): boolean {
    return this.as.isLoggedIn;
  }

}
