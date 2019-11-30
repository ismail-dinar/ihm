import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {SharingService} from '../../../services/sharing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  popup = false;
  nameControl = new FormControl('', Validators.required);
  authorControl = new FormControl('', Validators.required);
  definitionControl = new FormControl('', Validators.required);
  questsControl = new FormControl('', Validators.required);
  deviceControl = new FormControl('', Validators.required);
  appControl = new FormControl('', Validators.required);
  userControl = new FormControl('', Validators.required);
  name: any;
  returned = false;
  constructor(private snackBar: MatSnackBar, private service: SharingService, private router: Router) { }

  ngOnInit() {
  }
  add() {
    this.popup = true;
  }
  disabledLeft() {
    return this.router.url === '/';
  }
  disabledRight() {
    return this.router.url === '/' || !this.returned;
  }
  onSubmit() {
    this.popup = false;
    this.snackBar.open('The criterion "' + this.name + '" was successfully added', 'Done', {duration: 2000, horizontalPosition: 'right'});
  }
  return() {
    this.returned = true;
    this.service.next(true);
  }
}
