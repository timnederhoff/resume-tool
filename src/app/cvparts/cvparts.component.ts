import { Component, Input } from '@angular/core';
import boe from '../../assets/translations.json';
import Resume, { Education, Skill } from '../models/Resume';
import { SelectionService } from '../service/selection.service';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html',
  styleUrls: ['cvparts.component.css']
})
export class CvpartsComponent {

  @Input() resumeData: Resume;
  translations = boe.nl;

  constructor(private selectionService: SelectionService) {
  }

  onPrint() {
    window.print();
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
