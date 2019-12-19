import { Component } from '@angular/core';
import Resume from './models/Resume';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  opened = true;
  resumeData: Resume;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('nl');
  }

}
