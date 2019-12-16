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

  higherEducation: Education[];
  otherEducation: Education[];
  languages: Language[];

  ngOnInit() {
    this.selectionService.higherEducation.subscribe(selection => this.higherEducation = selection);
    this.selectionService.otherEducation.subscribe(selection => this.otherEducation = selection);
    this.selectionService.languages.subscribe(selection => this.languages = selection);
  }

}
