import { Component, OnInit } from '@angular/core';
import { Work } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private selectionService: SelectionService) { }

  work: Work[];

  ngOnInit() {
    this.selectionService.work.subscribe(selection => this.work = selection);
  }

}
