import { Component, Input, OnInit } from '@angular/core';
import boe from '../../assets/translations.json';
import { Education, Skill, Work } from '../models/Resume';
import { MatListOption } from '@angular/material/list';
import { SelectionService } from '../service/selection.service';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html',
  styleUrls: ['cvparts.component.css']
})
export class CvpartsComponent {

  @Input() resumeData;
  translations = boe.nl;

  constructor(private selectionService: SelectionService) {
  }

  onGroupsChange(options: MatListOption[]) {
    this.selectionService.updateSelection(options);
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
