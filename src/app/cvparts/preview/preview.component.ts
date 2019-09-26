import { Component, Input } from '@angular/core';
import { Skill, Work } from '../Resume';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() selectedWork: Work[];
  @Input() resumeData;
  @Input() skills;
  @Input() education;
  @Input() languages;

  constructor() {
  }
}
