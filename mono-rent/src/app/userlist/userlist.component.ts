import { Component, OnInit, Input } from '@angular/core';
import { user } from '../user.model';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
@Input() utente : user;
  constructor() { }

  ngOnInit() {
  }

}
