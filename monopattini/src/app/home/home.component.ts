import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title = 'monopattini';
dataa: Array <Object>;
o :Observable<Object>;
msg : string = "";


  constructor(public http: HttpClient , private cookieService:CookieService) { }


login(user:HTMLInputElement, psw:HTMLInputElement) : boolean{
console.log("1a");
    this.http.get('https://my-json-server.typicode.com/ElPumpil/elpumpil/utente')
       .subscribe(dataa => {
         console.log("1b");
          for(let i of dataa){
            console.log("2a");
            console.log(i.username+" "+  i.psw);
            if(i.username==user.value && i.psw==psw.value){
              console.log("2");
              this.cookieService.set("biscotto" , i.id);
              console.log("3");
              window.location.reload();


              break
            }
          }

       });
            return false;




  }

  signup(user1:HTMLInputElement, psw1:HTMLInputElement): boolean {
   this.http.post('https://my-json-server.typicode.com/ElPumpil/elpumpil/utente',
       JSON.stringify({
         username : user1.value ,
         psw: psw1.value ,


       })
     )
     .subscribe(dataa => {

      console.log(dataa);

      if (dataa != undefined)
     {this.msg="registrato"}
       else{
         this.msg="non registrato";
       }


     });






     return false;
  }


  ngOnInit() {
  }

}
