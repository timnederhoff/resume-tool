import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent {

  @Input() resumeData;
  constructor() { }

}
