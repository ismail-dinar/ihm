import {Component, Input, OnInit} from '@angular/core';
import {criterias} from '../criteria/criteria';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

export interface EvaluationElement {
  name: string;
  evaluation: number;
  justification: string;
  category?: string;
}

export interface Category {
  category: string;
  evaluation?: string;
}



@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  displayedColumns = ['name', 'evaluation', 'justification'];
  resultDisplayedColumns = ['name', 'evaluation'];
  dataSource: (EvaluationElement | Category)[] = [];
  popup = false;
  currentCriteria: any;
  title: any;
  isEvaluate = false;
  resultPopup = false;
  avg = 0;
  @Input() categories: any;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.snackBar.open('You must fill the grid to be able to generate a summary of this evaluation.', 'Ok', {duration: 5000, horizontalPosition: 'left'});
    if (this.categories.includes('all')) {
      for (const element of criterias) {
        this.dataSource.push({category: element.category});
        for (const ele of element.criterias) {
          this.dataSource.push({name: ele.name, evaluation: null, justification: ''});
        }
      }
    } else {
      for (const categ of this.categories) {
        this.dataSource.push({category: categ});
        for (const ele of criterias.find((item) => item.category === categ).criterias){
          this.dataSource.push({name: ele.name, evaluation: null, justification: ''});
        }
      }
    }

  }
  isCategory(index, item): boolean {
    return item.category;
  }
  test(e, ele) {
    ele.evaluation = e.value;
    this.isEvaluate = this.dataSource.every( (item) => item.evaluation !== null);
  }
  evaluate() {
    this.resultPopup = true;
    let length = 0;
    for (const elem of this.dataSource) {
      if (typeof elem.evaluation === 'string') {
        length++;
        this.avg += Number(elem.evaluation);
      }
    }
    console.log(length);
    this.avg = Number((this.avg / length).toFixed(1));
  }

  details(name) {
    this.popup = true;
    criterias.filter( (item) => {
      for (const criteria of item.criterias) {
        if (criteria.name === name ) {
          this.currentCriteria = criteria;
          break;
        }
      }
      return null;
    });
    this.title = this.currentCriteria.name + ' (' + this.currentCriteria.author + ')';
    console.log(this.currentCriteria);
  }
}
