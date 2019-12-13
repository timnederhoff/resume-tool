import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent implements OnInit {

  @Input() resumeData;
  @Input() selectedWork;
  basics: MatListOption[];
  title = 'you';
  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.selectionService.selection.subscribe(selection => this.basics = selection);
    this.title = this.basics.map(o => o.value)[7].value;
    if (this.resumeData) {
      this.basics = this.resumeData.basics;
    }
  }

  // recentWork(limit: number): Work[] {
  //   return this.selectedWork.sort((o, a) => {
  //     return new Date(a.startDate).getTime() - new Date(o.startDate).getTime();
  //   }).slice(0, limit);
  // }

}
