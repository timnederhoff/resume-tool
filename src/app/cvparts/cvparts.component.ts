import { Component, OnInit } from '@angular/core';
import lala from '../../assets/cv_tim_nederhoff_nl.json';
import boe from '../../assets/translations.json';
import Resume, { Education, Skill, Work } from './Resume';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html',
  styleUrls: ['cvparts.component.css']
})
export class CvpartsComponent implements OnInit {

  resumeData: Resume = lala as Resume;
  translations = boe.nl;
  opened = true;
  doc;

  constructor() {
  }

  ngOnInit(): void {
    this.doc = new jsPDF();
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
