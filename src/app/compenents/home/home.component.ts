import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  deviceControl = new FormControl('', Validators.required);
  appControl = new FormControl('', Validators.required);
  userControl = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
