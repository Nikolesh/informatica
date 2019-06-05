import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monopattini';

    loggato: boolean = false;
  constructor(private cookieService:CookieService) {
    if (cookieService.check("biscotto")){
      this.loggato=true;
    }
  }
  logout():boolean{
    this.cookieService.delete("biscotto");

    this.loggato=false;
    return false;
  }

}
