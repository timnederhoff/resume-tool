import { Component } from '@angular/core';
import cvData from '../../../assets/cv_tim_nederhoff_nl.json';

@Component({
  selector: 'app-footer',
  template: '<footer>{{basics.email}} | {{basics.phone}} | {{basics.location.address}}, ' +
    '{{basics.location.postalCode}} {{basics.location.city}} | {{linkedInUrl}}</footer>'
})
export class FooterComponent {

  basics = cvData.basics;
  linkedInUrl = this.basics.profiles.filter(p => p.network === 'LinkedIn')[0].url;
  constructor() { }

}
