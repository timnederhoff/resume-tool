import { Component, Input, OnInit } from '@angular/core';
import { Education, Language } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private selectionService: SelectionService) { }

  education: Education[];
  languages: Language[];

  getHigherEducation(): Education[] {
    return this.education.filter(ed => ['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

  getOtherEducation(): Education[] {
    return this.education.filter(ed => !['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

  ngOnInit() {
    this.selectionService.education.subscribe(selection => this.education = selection.map(o => o.value));
    this.selectionService.languages.subscribe(selection => this.languages = selection.map(o => o.value));
  }

}
