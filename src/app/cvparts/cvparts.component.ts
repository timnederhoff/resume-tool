import { Component } from '@angular/core';
import lala from '../../assets/cv_tim_nederhoff_nl.json';
import boe from '../../assets/translations.json';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html'
})
export class CvpartsComponent {

  resumeData = lala;
  translations = boe.nl;
  opened = true;

  constructor() {
  }

  onPrint() {
    window.print();
  }

}
