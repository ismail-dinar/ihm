import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './compenents/bars/nav-bar/nav-bar.component';
import { HomeComponent } from './compenents/home/home.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatRadioModule, MatRippleModule,
  MatSelectModule, MatSnackBarModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CriteriaComponent } from './compenents/criteria/criteria.component';
import { SelectedCriteriaComponent } from './compenents/selected-criteria/selected-criteria.component';
import {DxPopupModule, DxScrollViewModule} from 'devextreme-angular';
import { EvaluationComponent } from './compenents/evaluation/evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CriteriaComponent,
    SelectedCriteriaComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatCheckboxModule,
    MatGridListModule,
    DxPopupModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    DxScrollViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
