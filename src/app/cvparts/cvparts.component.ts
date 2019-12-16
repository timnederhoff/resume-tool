import { Component, Input } from '@angular/core';
import translations from '../../assets/translations.json';
import Resume, { Education, Skill } from '../models/Resume';
import { SelectionService } from '../service/selection.service';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html',
  styleUrls: ['cvparts.component.css']
})
export class CvpartsComponent {

  private basics;
  private selectedWork;
  private skillsMethodTechniques;
  private skillsBranchKnowledge;
  private skillsProgramming;
  private skillsServerSoftware;
  private skillsTools;
  private skillsOSes;
  private higherEducation;
  private otherEducation;
  private languages;

  @Input() resumeData: Resume;
  translations = translations.nl;

  constructor(private selectionService: SelectionService) {
    this.selectedWork = this.resumeData;
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
