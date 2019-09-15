import {Component, Input, OnInit} from '@angular/core';
import * as allData from '../../assets/cv_tim_nederhoff_nl.json';

@Component({
  selector: 'app-cvparts',
  template: `
    <app-profile [basics]="basics" [selection]="selection"></app-profile>
    <app-work></app-work>
  `
})
export class CvpartsComponent implements OnInit {

  @Input() basics;
  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
