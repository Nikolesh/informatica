import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-informazioni-prenotazione',
  templateUrl: './informazioni-prenotazione.component.html',
  styleUrls: ['./informazioni-prenotazione.component.css']
})
export class InformazioniPrenotazioneComponent implements OnInit {
  @Input() preno: Prenotazione;
  constructor() { }

  ngOnInit() {
  }

}
