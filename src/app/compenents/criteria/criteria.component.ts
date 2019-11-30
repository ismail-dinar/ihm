import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {criterias} from './criteria';
import {SharingService} from '../../services/sharing.service';
export interface Criteria {
  name: string;
  category: string;
  definition: string;
  author: string;
  application: string;
  users: string;
  device: string;
  questions: any;
}
@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  checked = [];
  isShow = false;
  isEvaluate = false;
  isAll = false;
  categories = ['guidance', 'workload', 'explicit control', 'adaptability', 'error management', 'consistency', 'significance of codes', 'compatibility'];
  constructor(private service: SharingService) { }
  ngOnInit() {
    this.service.return$.subscribe( (data) => {this.isShow = false; this.isEvaluate = false; });
  }
  getChecked(e, selected) {
    this.checked = [];
    if (selected.length === 0) {
      this.isAll = false;
    }
    for (const s of selected) {
      this.isAll = s._value === 'all';
      if (s._value === 'all') {
        this.checked = ['all'];
        break;
      }
      this.checked.push(s._value);
    }
  }
}
