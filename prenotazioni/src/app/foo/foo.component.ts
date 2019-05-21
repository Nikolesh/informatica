import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  @Input() pren : Prenotazione;
  selectedPren : Prenotazione;
  constructor() { }

  ngOnInit() {
  }

  onSelect(p : Prenotazione)
  {
     this.selectedPren = p; 
  }

}
