import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione.model'; // <-- import this
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prenotazioni';
  prenotazione: Prenotazione[];
  oArt: Observable<Prenotazione[]>;

constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.prenotazione = new Array<Prenotazione>();
    this.oArt = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oArt.subscribe(this.ricevidati);

}


    ricevidati = (data : Prenotazione[]) => {
   this.prenotazione = data;

  }


}
