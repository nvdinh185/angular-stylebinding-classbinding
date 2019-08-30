import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  isHighLight = true;
  redColor = 'red'
  constructor() { }

  ngOnInit() {
  }

}
