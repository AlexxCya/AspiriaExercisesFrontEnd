import { Component } from '@angular/core';
import { ApiAuthService} from './services/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public _apiAuthService:ApiAuthService, private router: Router) {}

  logout(){
    this._apiAuthService.logOut();
    this.router.navigate(['/']);
  }
}
