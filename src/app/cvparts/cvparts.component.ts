import { Component } from '@angular/core';
import lala from '../../assets/cv_tim_nederhoff_nl.json';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html'
})
export class CvpartsComponent {

  cvData = lala;
  opened = true;

  constructor() {
  }

  onPrint() {
    window.print();
  }

}
