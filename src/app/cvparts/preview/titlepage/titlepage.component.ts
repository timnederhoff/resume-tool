import { Component, Input, OnInit } from '@angular/core';
import { Basics, Work } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent implements OnInit {

  selectedWork;
  basics = [];
  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.selectionService.work.subscribe(selection => this.selectedWork = selection);
    this.selectionService.basics.subscribe(selection => this.basics = selection);
  }

  recentWork(limit: number): Work[] {
    return this.selectedWork.sort((o, a) => {
      return new Date(a.startDate).getTime() - new Date(o.startDate).getTime();
    }).slice(0, limit);
  }

  basicByKey = (key: string) => this.basics.length > 0 ? this.basics.filter(o => o.key === key)[0].value : '';

}
