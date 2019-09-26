import { Component } from '@angular/core';
import lala from '../../assets/cv_tim_nederhoff_nl.json';
import boe from '../../assets/translations.json';
import Resume, { Education, Skill, Work } from './Resume';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html'
})
export class CvpartsComponent {

  resumeData: Resume = lala as Resume;
  translations = boe.nl;
  opened = true;

  constructor() {
  }

  onPrint() {
    window.print();
  }

  getSelectedWork(sw): Work[] {
    return sw.map(o => o.value);
  }

  getSkillsForKeyword(requestedKeyword: string): Skill[] {
    return this.resumeData.skills.filter(skill => skill.keywords.includes(requestedKeyword));
  }

  getHigherEducation(): Education[] {
    return this.resumeData.education.filter(ed => ['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

  getOtherEducation(): Education[] {
    return this.resumeData.education.filter(ed => !['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

}
