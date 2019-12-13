import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../../models/Resume';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  @Input() education;
  @Input() languages;

  getHigherEducation() {
    return this.education.higherEducation.map(o => o.value);
  }

  getOtherEducation() {
    return this.education.otherEducation.map(o => o.value);
  }

  getLanguages() {
    return this.languages.map(o => o.value);
  }

}
