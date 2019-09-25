import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../Resume';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent implements OnInit {

  @Input() resumeData;
  @Input() selectedWork;
  basics: any;
  constructor() { }

  ngOnInit(): void {
    this.basics = this.resumeData.basics;
  }

  recentWork(limit: number): Work[] {
    return this.selectedWork.sort((o, a) => {
      return new Date(a.startDate).getTime() - new Date(o.startDate).getTime();
    }).slice(0, limit);
  }

}
