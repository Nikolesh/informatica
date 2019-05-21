import { Component } from '@angular/core';
import { user } from './user.model'; // <-- import this
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mono-rent';
  utente: user[];
  oArt: Observable<user[]>;
  data = Object;



constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.utente = new Array<user>();
    this.oArt = this.http.get<user[]>('https://my-json-server.typicode.com/Nikolesh/informatica/user');

    this.oArt.subscribe(data => {
            data.forEach(element => {
                this.utente.push(new user(element.nome, element.cognome, element.nikname, Number(element.telefono), element.email, element.psw));
            });
        })

}
ngOnInit() {
        this.utente = new Array<user>();
    }

reg(nome: HTMLInputElement  ,cognome : HTMLInputElement, nikname :HTMLInputElement, telefono :HTMLInputElement, email :HTMLInputElement, psw :HTMLInputElement  ) : boolean
  {
    this.utente.push(new user(nome.value, cognome.value, nikname.value, Number(telefono.value), email.value, psw.value));
    return false;
  }
ricevidati = (data : user[]) => {
   this.utente = data;

  }


}
