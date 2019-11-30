import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SharingService} from '../../services/sharing.service';
import {criterias} from '../criteria/criteria';

@Component({
  selector: 'app-selected-criteria',
  templateUrl: './selected-criteria.component.html',
  styleUrls: ['./selected-criteria.component.scss']
})
export class SelectedCriteriaComponent implements OnInit {
  criteriaToShow = [];
  popup = false;
  title = '';
  currentCriteria: any;
  @Input() categories: any;
  constructor() { }

  ngOnInit() {
    if (this.categories.includes('all')) {
      this.criteriaToShow = criterias;
    } else {
      for (const categ of this.categories) {
        this.criteriaToShow.push({category: categ, criterias: criterias.find((item) => item.category === categ).criterias});
      }
    }
  }
  details(criteria) {
    this.popup = true;
    this.currentCriteria = criteria;
    this.title = criteria.name + ' (' + criteria.author + ')';
  }

}
