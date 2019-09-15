import { Component, OnInit } from '@angular/core';
import * as allData from '../../assets/cv_tim_nederhoff_nl.json';

@Component({
  selector: 'app-cvparts',
  templateUrl: './cvparts.component.html',
  styleUrls: ['./cvparts.component.css']
})
export class CvpartsComponent implements OnInit {

  title = allData.titlepage.name;
  basics = allData.basics;
  keys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
