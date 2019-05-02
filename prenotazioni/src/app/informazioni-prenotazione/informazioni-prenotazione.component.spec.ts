import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformazioniPrenotazioneComponent } from './informazioni-prenotazione.component';

describe('InformazioniPrenotazioneComponent', () => {
  let component: InformazioniPrenotazioneComponent;
  let fixture: ComponentFixture<InformazioniPrenotazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformazioniPrenotazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformazioniPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
