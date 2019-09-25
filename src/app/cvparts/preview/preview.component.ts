import { Component, Input } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Work } from '../Resume';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() selectedWork: Work[];
  @Input() resumeData;

  constructor() {
  }
}
