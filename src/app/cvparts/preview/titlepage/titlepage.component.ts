import { Component, Input, OnInit } from '@angular/core';

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

  recentWork() {
    return this.selectedWork.sort((o, a) => {
      return new Date(a.value.startDate).getTime() - new Date(o.value.startDate).getTime();
    }).slice(0, 4);
  }

}
