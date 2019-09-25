import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../Resume';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input() selectedWork: Work[];

  constructor() { }

  ngOnInit() {
  }

}
