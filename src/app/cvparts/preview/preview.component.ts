import { Component, Input } from '@angular/core';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() selectedWork;
  @Input() resumeData;

  constructor() {
  }
}
